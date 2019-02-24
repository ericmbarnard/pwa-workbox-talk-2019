const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function (config, env) {

        if (env !== "production") {
            return config;
        }

        const oldWorkBoxPlugin = config.plugins.find(x => {
            return (x instanceof WorkboxWebpackPlugin.GenerateSW)
        });

        console.log(oldWorkBoxPlugin);

        if (!oldWorkBoxPlugin) {
            return config;
        }

        // Replace GenerateSW with more prescriptive InjectManifest
        let index = config.plugins.indexOf(oldWorkBoxPlugin);
        config.plugins[index] = new WorkboxWebpackPlugin.InjectManifest({
            swSrc: './src/sw.js',
            // clientsClaim: true,
            exclude: [/\.map$/, /asset-manifest\.json$/],
            importWorkboxFrom: 'cdn',
            // navigateFallback: oldWorkBoxPlugin.config.navigateFallback,
            // navigateFallbackBlacklist: [
            //     // Exclude URLs starting with /_, as they're likely an API call
            //     new RegExp('^/_'),
            //     // Exclude URLs containing a dot, as they're likely a resource in
            //     // public/ and not a SPA route
            //     new RegExp('/[^/]+\\.[^/]+$'),
            // ],
        });

        return config;
    }
};