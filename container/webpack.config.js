const HtmlWebpackPlugin = require('html-webpack-plugin');
/** FOR FEDERATION */
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        /** FOR FEDERATION */
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                productsApp: 'products@http://localhost:8081/remoteEntry.js', // REMOTE microfrontend fetched using configurations in his webpack.config.js [name]@[urlexposed]:[port]/[fileName]
                cartApp: 'cart@http://localhost:8082/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
};