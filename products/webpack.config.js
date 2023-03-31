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
                './ProductsIndex': './src/bootstrap' // source code location to be exposed
            },
            shared: [ // Share node imports that this microfrentend has and maybe other microfrontends have!
                'faker'
            ],
        }),
        // For automatically
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};