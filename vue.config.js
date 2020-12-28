const path = require('path')
module.exports = {
  /** 区分打包环境与开发环境
 * process.env.NODE_ENV==='production'  (打包环境)
 * process.env.NODE_ENV==='development' (开发环境)
 * baseUrl: process.env.NODE_ENV==='production'?"https://yazhuo.com/front/":'front/',
 */

  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部,
  // 例如 https://www.yazhuo.com/
  // 如果你的应用部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如将你的应用部署在
  // https://www.yazhuo.com/yazhuo/
  // 那么将这个值改为 '/yazhuo/'
  // baseUrl: "/weekCheckout/", // 构建好的文件输出到哪里,部署应用时的基本URL，已经废除

  // 基本路径。默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
  publicPath: '/',
  // 构建时的输出项目
  outputDir: 'practicalToolkit',
  // 放置静态资源的目录
  // 注：从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略。
  assetsDir: 'static',
  // html的输出路径
  indexPath: 'index.html',
  // 是否在保存的时候使用`eslint-loader`进行检查
  lintOnSave: true,
  // 是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: true,
  //  babel-loader 默认会跳过 node_modules 依赖。
  transpileDependencies: [/* string or regex */],
  // 生产环境的source Map,不需要时设置为false加速生产环境构建
  productionSourceMap: false,
  // 设置生成的HTML中<link rel="stylesheet">和<script>标签的crossorigin属性
  crossorigin: '',
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  integrity: false,
  // 调整内部的 webpack 配置
  configureWebpack: () => { },
  // (Object | Function)
  chainWebpack: () => { },
  // 配置webpack-dev-server行为
  devServer: {
    // open 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
    // open: process.platform === 'darwin',
    // 默认是 localhost。如果你希望服务器外部可访问，指定如下 host: '0.0.0.0'，设置之后之后可以访问ip地址
    host: '0.0.0.0',
    port: '4399',
    disableHostCheck: true,
    open: true, // 自动开启浏览器
    useLocalIp: true,
    // hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，
    // 开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
    // hot: true,
    https: false,
    // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
    hotOnly: true,
    // 当前端应用和后端API服务器不在同一个主机上运行时，需要在开发环境下将API请求代理到API服务器。
    // 这个问题可以通过vue.config.js中的devServer.proxy选项来配置
    overlay: {
      warnings: false,
      errors: false
    },
    // 设置代理
    proxy: {
      '/api': {
        // 目标接口域名
        target: 'http://10.10.10.199:8010',
        // 代理websockets
        ws: true,
        // 是否跨域
        changeOrigin: true,
        // false为http访问，true为https访问
        secure: false,
        pathRewrite: {
          // 重写接口
          '^/api': ''
        }
      }
    },
    // string | object
    before: app => { }
  },
  css: {
    // 将组件内的css提取到一个单独的css文件（只在生产环境）
    // 也可以是传递给 extract-text-webpack-plugin 的选项对象
    extract: false, // 若为true,css无法热更新
    // 是否开启css source map，设置为 true 之后可能会影响构建的性能
    sourceMap: false,
    // 为预处理器的Loader传递自定义选项，比如传递给css-loader时，使用`{css:{...}}`
    // 支持的 loader 有css-loader，postcss-loader，sass-loader，less-loader，stylus-loader
    loaderOptions: {
      // css: {
      //     // 这里的选项会传递给css-loaer
      // },
      // 要与使用的style="less"相匹配
      // less: {
      //   javascriptEnabled: true
      //   // 这里的选项会传递给less-loader
      // }
      sass: {
        prependData: `@import "@/assets/css/params.scss";`
        // 这里的选项会传递给sass-loader
      }
      // postcss: {
      //     // 这里的选项会传递给postcss-loader
      // }
    },
    // 为所有的css及其预处理文件开启CSS Modules,如果你想去掉文件名中的Modules。
    // 这个选项不会影响`*.vue`文件,v-cli3以后用requireModuleExtension代替Modules
    // 如果为false，那么elementUI会失效
    requireModuleExtension: true
  },
  // 第三方插件的配置
  pluginOptions: {}
}
