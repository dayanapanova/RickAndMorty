/**
 * For more info go to: https://github.com/timarney/react-app-rewired
 */

const {
  override,
  addWebpackAlias,
  addBabelPlugin,
  addWebpackPlugin
} = require('customize-cra')

const path = require('path')

const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const autoFixEslint = options => config => {
  config.module.rules = config.module.rules.map(rule => {

    if (Array.isArray(rule.use)) {
      rule.use = rule.use.map(use => {
        const isEslint = JSON.stringify(use).match(/node_modules\/eslint/gi) && typeof use.options === 'object'

        if (isEslint) {
          use.options = {
            ...use.options,
            fix: true
          }
        }

        return use
      })
    }

    return rule
  })

  return config
}

const keepBanner = ({value: match = /File generated/gmi} = {}) => config => {
  config.optimization.minimizer = config.optimization.minimizer.map(rule => {

    if (rule.constructor.name === 'TerserPlugin') {
      rule.options.extractComments = false
      rule.options.terserOptions.output.comments = match
    }

    return rule
  })

  return config
}

const disableMinification = options => config => {
  config.optimization.minimize = false

  return config
}

const banner =
`************************************************************************
  ${process.env.npm_package_name}
  ${process.env.npm_package_description}

    File generated:      ${new Date().toUTCString()} (${Math.round(new Date().getTime() / 1000)})
    License              ${process.env.npm_package_license}
    Version:             ${process.env.npm_package_version}-${process.env.COMMIT_SHORT_SHA}
************************************************************************`

module.exports = override(
  // disableMinification(),
  addWebpackPlugin(new webpack.BannerPlugin({
    banner
  })),
  addWebpackPlugin(new LodashModuleReplacementPlugin({
    paths: true
  })),
  addBabelPlugin(['lodash']),
  addBabelPlugin(['babel-plugin-styled-components',
    {
      ...(process.env.NODE_ENV.match(/prod/gi) && {
        displayName: false
      }),
      ssr: false,
      pure: true
    }
  ]),
  autoFixEslint(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  keepBanner()
)
