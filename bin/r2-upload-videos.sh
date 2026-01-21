#!/bin/bash
UPLOAD_DIR="${1:?Usage: $0 <local-directory> <remote-directory>}"
REMOTE_DIR="${2:?Usage: $0 <local-directory> <remote-directory>}"
BUCKET="masonmcelvain-media"

if [ ! -d "$UPLOAD_DIR" ]; then
  echo "Error: $UPLOAD_DIR is not a directory"
  exit 1
fi

shopt -s nullglob nocaseglob

for f in "$UPLOAD_DIR"/*.{mov,mp4}; do
  filename=$(basename "${f%.*}")
  output="/tmp/${filename}-compressed.mp4"

  echo "Compressing $f..."
  ffmpeg -i "$f" \
    -vf "zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p" \
    -c:v libx264 -crf 20 -preset fast \
    -c:a aac -b:a 128k \
    "$output"

  echo "Uploading to R2..."
  pnpx wrangler r2 object put "$BUCKET/$REMOTE_DIR/${filename}.mp4" --file "$output" --remote

  # Clean up temp file only
  rm "$output"
  echo "Done: ${filename}.mp4"
done

