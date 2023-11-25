/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000, // You can adjust the limit as needed
          name: '[name].[hash].[ext]',
          outputPath: 'videos', // Output directory for the processed videos
          publicPath: '/_next/static/videos', // Public path to access the videos
          esModule: false,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
