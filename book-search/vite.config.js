import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from  "path" ; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : { 
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      pages: path.resolve(__dirname, "./src/pages"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      books: `${path.resolve(__dirname, "./src/components/Books/")}`,
      images: `${path.resolve(__dirname, "./src/images/")}`,
      constants: `${path.resolve(__dirname, "./src/constants/")}`
    },
  } 
})
