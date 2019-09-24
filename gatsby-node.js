/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require('fs')
const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  })
}

exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions

  let pages = []
  try {
    const pagesJson = await fs.promises.readFile(path.join(__dirname, './data/pages.json'))
    pages = JSON.parse(pagesJson)
  } catch (e) {
    reporter.panicOnBuild(`Error while loading pages.json`)
    return
  }

  const template = path.join(__dirname, `./src/templates/standard-page.js`)
  pages.forEach(page => {
    const path = page.url
    createPage({
      path,
      component: template,
      context: {
        componentTree: page.root,
      },
    })
  })
}
