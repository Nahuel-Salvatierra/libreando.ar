import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'

// https://vitejs.dev/config/

export default()=>{
  if (process.env.VITE_REACT_APP_DEVELOPMENT=='true') {
    return defineConfig({
      plugins: [react()]
    })
  } else {
    return defineConfig({
      plugins: [react()],
      base: '/libreando.ar/'
    })
  }
}



