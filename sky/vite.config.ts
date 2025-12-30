import { fileURLToPath,URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //基本路径
  base:'/bigscreen',

server:{
  //设置端口号
  port:9091,
  //开启自动打开浏览器
  open:true,
  //设置代理
  proxy:{
    '/smplatformApi':{
      target:'http://10.20.10.87.7001',
      changeOrigin:true

    }
  }


},
resolve:{
  alias:{
    // '@': fileURLToPath(new URL('./src', import.meta.url))
    '@': path.resolve(__dirname, 'src')

  }
}
})