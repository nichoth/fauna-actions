import { defineConfig, mergeConfig } from 'vitest/config'
import vitestConfig from './vitest.config'

export default mergeConfig(vitestConfig, await defineConfig({
    test: {
        browser: {
            provider: 'playwright',
            enabled: true,
            headless: true,
            name: 'chromium'
        }
    }
}))
