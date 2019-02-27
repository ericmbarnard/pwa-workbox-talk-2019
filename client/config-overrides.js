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

        if (!oldWorkBoxPlugin) {
            return config;
        }

        // Replace GenerateSW with more prescriptive InjectManifest
        let index = config.plugins.indexOf(oldWorkBoxPlugin);
        config.plugins[index] = new WorkboxWebpackPlugin.InjectManifest({
            swSrc: './src/sw.js',
            exclude: [/\.map$/, /asset-manifest\.json$/],
            importWorkboxFrom: 'cdn'
        });

        return config;
    }
};