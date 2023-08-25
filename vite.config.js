import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default()=>{
  if (false) {
    return defineConfig({
      plugins: [react()],
      base: '/libreando.ar/'
    })
  } else {
    return defineConfig({
      plugins: [react()],
    })
  }
  
}



