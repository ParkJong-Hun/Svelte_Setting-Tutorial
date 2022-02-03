const sveltePreprocess = require('svelte-preprocess');
const production = !process.env.ROLLUP_WATCH;

module.exports = {
    preprocess: sveltePreprocess({ 
        soruceMap: !production,
        //autoprifixer setting
        postcss: {
            plugins: [autoprifixer()]
        }
    }),
    compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,
        //prependData setting (for don't use @import)
        scss: {
            prependData: `@import "src/assets/scss/variables.scss";`
        },
    }
}
