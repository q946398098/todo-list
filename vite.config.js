import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
 // root: './src',  //root: 指定项目根目录为 ./src。
 // base: '/',     //base: 部署的基础路径为 /
 // publicDir: 'static', //静态资源目录为 static
 // define: { // define: 定义全局常量 __APP_VERSION__
 //  __APP_VERSION__: JSON.stringify('v1.0.0')
 // },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: { //配置模块解析，设置路径别名 @ 和自动解析的文件扩展名。
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.vue']
  },
  server: { // server: 配置开发服务器，端口为 3000，自动打开浏览器
    port: 5174,
    // host: '0.0.0.0',
    // open: true,
    // https: false
  },
  // build: { //build: 配置构建选项，输出目录为 dist，静态资源目录为 assets。
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  //   rollupOptions: {
  //     input: {
  //       main: './src/main.js'
  //     }
  //   }
  // },
  // css: { //css: 配置 CSS 预处理器选项，引入全局样式变量。
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/styles/variables.scss";`
  //     }
  //   }
  // },
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment'
  // },
})
