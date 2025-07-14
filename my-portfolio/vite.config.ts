import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {
        outDir: 'dist', // Vercel'in beklediği çıktı dizini
    },
    server: {
        port: 3000, // Vercel'in default portu
    }
})