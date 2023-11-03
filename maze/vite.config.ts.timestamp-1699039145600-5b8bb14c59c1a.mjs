// vite.config.ts
import { defineConfig } from "file:///C:/Users/11115/Desktop/Maze/maze/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///C:/Users/11115/Desktop/Maze/maze/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
var vite_config_default = defineConfig({
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true
  },
  // to access the Tauri environment variables set by the CLI with information about the current target
  envPrefix: ["VITE_", "TAURI_PLATFORM", "TAURI_ARCH", "TAURI_FAMILY", "TAURI_PLATFORM_VERSION", "TAURI_PLATFORM_TYPE", "TAURI_DEBUG"],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG
  },
  plugins: [svelte()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMTExNVxcXFxEZXNrdG9wXFxcXE1hemVcXFxcbWF6ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMTExMTVcXFxcRGVza3RvcFxcXFxNYXplXFxcXG1hemVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzExMTE1L0Rlc2t0b3AvTWF6ZS9tYXplL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIHByZXZlbnQgdml0ZSBmcm9tIG9ic2N1cmluZyBydXN0IGVycm9yc1xuICBjbGVhclNjcmVlbjogZmFsc2UsXG4gIC8vIFRhdXJpIGV4cGVjdHMgYSBmaXhlZCBwb3J0LCBmYWlsIGlmIHRoYXQgcG9ydCBpcyBub3QgYXZhaWxhYmxlXG4gIHNlcnZlcjoge1xuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gIH0sXG4gIC8vIHRvIGFjY2VzcyB0aGUgVGF1cmkgZW52aXJvbm1lbnQgdmFyaWFibGVzIHNldCBieSB0aGUgQ0xJIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgdGFyZ2V0XG4gIGVudlByZWZpeDogWydWSVRFXycsICdUQVVSSV9QTEFURk9STScsICdUQVVSSV9BUkNIJywgJ1RBVVJJX0ZBTUlMWScsICdUQVVSSV9QTEFURk9STV9WRVJTSU9OJywgJ1RBVVJJX1BMQVRGT1JNX1RZUEUnLCAnVEFVUklfREVCVUcnXSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBUYXVyaSB1c2VzIENocm9taXVtIG9uIFdpbmRvd3MgYW5kIFdlYktpdCBvbiBtYWNPUyBhbmQgTGludXhcbiAgICB0YXJnZXQ6IHByb2Nlc3MuZW52LlRBVVJJX1BMQVRGT1JNID09ICd3aW5kb3dzJyA/ICdjaHJvbWUxMDUnIDogJ3NhZmFyaTEzJyxcbiAgICAvLyBkb24ndCBtaW5pZnkgZm9yIGRlYnVnIGJ1aWxkc1xuICAgIG1pbmlmeTogIXByb2Nlc3MuZW52LlRBVVJJX0RFQlVHID8gJ2VzYnVpbGQnIDogZmFsc2UsXG4gICAgLy8gcHJvZHVjZSBzb3VyY2VtYXBzIGZvciBkZWJ1ZyBidWlsZHNcbiAgICBzb3VyY2VtYXA6ICEhcHJvY2Vzcy5lbnYuVEFVUklfREVCVUcsXG4gICAgXG4gIH0sXG4gIHBsdWdpbnM6IFtzdmVsdGUoKV0sXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyxvQkFBb0I7QUFDM1QsU0FBUyxjQUFjO0FBRXZCLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUEsRUFFMUIsYUFBYTtBQUFBO0FBQUEsRUFFYixRQUFRO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUFBO0FBQUEsRUFFQSxXQUFXLENBQUMsU0FBUyxrQkFBa0IsY0FBYyxnQkFBZ0IsMEJBQTBCLHVCQUF1QixhQUFhO0FBQUEsRUFDbkksT0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRLFFBQVEsSUFBSSxrQkFBa0IsWUFBWSxjQUFjO0FBQUE7QUFBQSxJQUVoRSxRQUFRLENBQUMsUUFBUSxJQUFJLGNBQWMsWUFBWTtBQUFBO0FBQUEsSUFFL0MsV0FBVyxDQUFDLENBQUMsUUFBUSxJQUFJO0FBQUEsRUFFM0I7QUFBQSxFQUNBLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFDcEIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K