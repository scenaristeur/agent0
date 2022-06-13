const path = require(`path`);
const publicPath = process.env.NODE_ENV === 'production' ? '/agent0/' : '/'

const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  // options...
  publicPath: publicPath,
  configureWebpack: {
    resolve: {
     symlinks: false,
     alias: {
         vue: path.resolve(`./node_modules/vue`) // https://stackoverflow.com/questions/68293064/vue-3-invalid-vnode-type
     }
 },
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  pwa: {
    name: 'Agent0',
    //  themeColor: '#4DBA87',
    //  msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: publicPath,
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    }
  },

  // browser-vue https://github.com/ipfs/js-ipfs/blob/c47a6335b77d5284711f13a83349000820f85775/examples/browser-vue/vue.config.js
  chainWebpack: config => config.resolve.symlinks(false),
})
