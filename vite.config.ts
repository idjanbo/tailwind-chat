import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    hmr: {
      overlay: true,
    },
    host: '0.0.0.0',
    port: 9089,
  },
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, '.')}/`,
      '/@/': `/${resolve(__dirname, 'src')}/`,
      '/@types/': `/${resolve(__dirname, 'src/types')}/`,
    },
  },
  plugins: [
    vue(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      imports: [
        // 需要自动导入的插件，自定义导入的API
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core',
        {
          axios: [['default', 'axios']],
        },
      ],
      dts: 'src/types/auto-import.d.ts', // 指明 .d.ts 文件的位置和文件名
      resolvers: [],
    }),
    Components({
      // 组件所在位置
      dirs: ['src/views/', 'src/components/'],
      //   resolvers: [AntDesignVueResolver()]
      dts: 'src/types/components.d.ts',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: { outputStyle: 'expanded' },
      },
    },
    devSourcemap: true,
  },
})
