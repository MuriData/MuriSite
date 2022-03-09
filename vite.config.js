import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    dedupe: ['vue']
  },
  plugins: [
      vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
})
