import { ConfigEnv, defineConfig, UserConfigExport } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

// 设置路径别名
const alias: Record<string, string> = {
  '@': pathResolve('src'),
}

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      host: '0.0.0.0',
      port: 9527,
    },
    plugins: [
      vue(),
      DefineOptions(),
      viteMockServe({
        mockPath: './src/mock',
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias,
      extensions: ['.ts', '.js'],
    },
  }
})
