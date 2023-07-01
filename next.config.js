/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  productionBrowserSourceMaps: false
}

module.exports = nextConfig

//builds shitty source map for dev tools

// module.exports = {
//   webpack: (config, { dev }) => {
//     // Enable Source Maps only during development
//
//       config.devtool = 'eval-source-map';
//
//
//     return config;
//   },
// };
