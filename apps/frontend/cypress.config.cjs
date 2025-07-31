const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        // point at your Vite dev server (default 5173) or preview server (4173)
        baseUrl: 'http://localhost:5173',
        specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: false,
    },
});