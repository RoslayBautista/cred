import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cred/' // Asegúrate de que esto coincida con el nombre de tu repositorio
});
