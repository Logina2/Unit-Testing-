import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  test:{
    environment:"jsdom",
    setupFiles:"./src/setupFile.js",
    globals:"true"
  }
=======
>>>>>>> f3495d646f421a3ae6f1785da4babfc664c33108
})
