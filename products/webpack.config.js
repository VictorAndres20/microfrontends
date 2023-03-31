const HtmlWebpackPlugin = require('html-webpack-plugin');
/** FOR FEDERATION */
const ModuleFerationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        /** This for FEDERATION */
        new ModuleFerationPlugin({
            name: 'products', // Name of module that is going to be fetch by HOST
            filename: 'remoteEntry.js', // name of file that is going to be fetch by HOST
            exposes: {
                './ProductsIndex': './src/index' // source code location to be exposed
            },
        }),
        // For automatically
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};