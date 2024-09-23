import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// https://vitest.dev/config/
export default mergeConfig(viteConfig, await defineConfig({
    define: {
        global: 'globalThis'
    },
    root: '.',
    esbuild: {
        include: ['**/*.ts']
    },
    mode: 'test',
    test: {
        browser: {
            provider: 'playwright',
            enabled: true,
            name: 'chromium'
        },
        reporters: ['default', 'html'],
        globals: true,
        environment: 'jsdom',
        include: ['test/index.ts'],
        exclude: []
    }
}))
