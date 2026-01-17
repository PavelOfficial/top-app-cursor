import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Находим правило для обработки файлов
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      // Исключаем SVG из стандартного file-loader
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Добавляем правило для SVG как React компонентов
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            dimensions: false,
            svgProps: {
              role: 'img',
            },
            ref: true,
            titleProp: true,
            descProp: true,
          },
        },
      ],
    });

    // Добавляем правило для SVG как URL (с ?url)
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /url/,
      type: 'asset/resource',
    });

    return config;
  },
};

export default nextConfig;
