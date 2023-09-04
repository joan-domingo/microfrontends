import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 5005, //port you want to serve this remote
  },
  plugins: [
    vue(),
    federation({
      name: 'remote-app-vue',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './HelloWorld': './src/components/HelloWorld.vue',
      },
      shared: ['vue']
  })
  ],
  build: {
    target: 'esnext'
  }
})
