import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": "http://backend:5000",
            // '/api': 'http://127.0.0.1:5000',
        },
    },
});
