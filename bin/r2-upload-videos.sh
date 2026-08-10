#!/bin/bash
UPLOAD_DIR="${1:?Usage: $0 <local-directory> <remote-directory>}"
REMOTE_DIR="${2:?Usage: $0 <local-directory> <remote-directory>}"
BUCKET="masonmcelvain-media"

# Dial these up/down to trade file size against fidelity, e.g. CRF=22 ./bin/r2-upload-videos.sh ...
CRF="${CRF:-20}"
PRESET="${PRESET:-slow}"

if [ ! -d "$UPLOAD_DIR" ]; then
  echo "Error: $UPLOAD_DIR is not a directory"
  exit 1
fi

shopt -s nullglob nocaseglob

for f in "$UPLOAD_DIR"/*.{mov,mp4}; do
  filename=$(basename "${f%.*}")
  output="/tmp/${filename}-compressed.mp4"

  # Only HDR sources need tonemapping. Running the tonemap chain on an SDR
  # source darkens it badly (~20% mean luma loss) because it compresses a range
  # that was already 0-100 nits.
  transfer=$(ffprobe -v error -select_streams v:0 \
    -show_entries stream=color_transfer -of default=nokey=1:noprint_wrappers=1 "$f")

  case "$transfer" in
    smpte2084 | arib-std-b67)
      echo "Compressing $f (HDR $transfer -> SDR bt709)..."
      # mobius is near-identity through the midtones and only rolls off above
      # diffuse white, so brightness survives. hable crushes midtones; clip
      # blows out highlights entirely.
      ffmpeg -i "$f" \
        -vf "zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=mobius:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p" \
        -c:v libx264 -crf "$CRF" -preset "$PRESET" \
        -color_primaries bt709 -color_trc bt709 -colorspace bt709 \
        -c:a aac -b:a 128k \
        -movflags +faststart \
        "$output"
      ;;
    *)
      echo "Compressing $f (SDR, no tonemapping)..."
      # format=yuv420p also handles full-range (yuvj420p) sources from cameras
      # like the GoPro, converting them to limited range correctly. Source
      # color tags pass through untouched.
      ffmpeg -i "$f" \
        -vf "format=yuv420p" \
        -c:v libx264 -crf "$CRF" -preset "$PRESET" \
        -c:a aac -b:a 128k \
        -movflags +faststart \
        "$output"
      ;;
  esac

  echo "Uploading to R2..."
  pnpx wrangler r2 object put "$BUCKET/$REMOTE_DIR/${filename}.mp4" --file "$output" --remote

  # Clean up temp file only
  rm "$output"
  echo "Done: ${filename}.mp4"
done
