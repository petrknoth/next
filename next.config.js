const path = require('path')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

const nextConfig = {
  webpack: config => {
    Object.assign(config.resolve.alias, {
      components: path.resolve(__dirname, 'components'),
      data: path.resolve(__dirname, 'data'),
    })

    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        include: [path.resolve(__dirname, 'data')],
        use: [
          'json-loader',
          path.resolve('webpack/data-loader.js'),
          {
            loader: 'yaml-import-loader',
            options: {
              output: 'json',
              importRawKeyword: 'file',
            },
          },
        ],
      },
      {
        test: /\.ya?ml$/,
        exclude: [path.resolve(__dirname, 'data')],
        use: {
          loader: 'yaml-import-loader',
          options: {
            importNested: false,
          },
        },
      },
      {
        test: /\.md$/,
        use: ['json-loader', 'yaml-frontmatter-loader'],
      }
    )

    return config
  },

  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
}

module.exports = withImages(withSass(withCss(nextConfig)))
