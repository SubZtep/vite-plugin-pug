import { resolve } from "path";
import { defineConfig } from "vite";
import pugPlugin from "../../src/index";
export default defineConfig({
    plugins: [pugPlugin(undefined, { hello: "world", baseUrl: "/nested/" })],
    base: "./",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                nested: resolve(__dirname, "nested/index.html"),
            },
        },
    },
});
//# sourceMappingURL=vite.config.js.map