/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname:
               "/drive-viewer/AK7aPaCTGHNVVx5V2BRX78sRQjGSkkR49dgQ9vvt_PX7wgB1uHE7DvL-cI5GX1Yc0F7nUsW4Ha9zyY3piegQwbLjGSN_OWi8iw=w1920-h1058",
         },
         {
            protocol: "https",
            hostname: "media.masonmcelvain.com",
         },
      ],
   },
   pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

export default nextConfig;
