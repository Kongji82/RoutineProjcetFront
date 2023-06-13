import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html", // 기본 index.html 파일
        login: "./login.html", //
        register: "./register.html", //
      },
    },
  },
});
