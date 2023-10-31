

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });

    return config
  }
}

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  nextConfig,
  
}
