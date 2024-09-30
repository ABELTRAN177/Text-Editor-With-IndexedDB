const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
        mode: 'development',
        entry: {
            main: './src/js/index.js',
            install: './src/js/install.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'My Progressive Web App',
                template: './src/index.html',
            }),
            new InjectManifest({
                swSrc: './src-sw.js',
                swDest: 'src-sw.js'
            }),
            new WebpackPwaManifest({
                name: 'My Progressive Web App',
                short_name: 'MyPWA',
                description: 'Take notes, set reminders, and more!',
                background_color: '#ffffff',
                theme_color: '#2196f3',
                start_url: '/',
                publicPath: '/',
                icons: [
                    {
                        src: path.resolve('src/images/logo.png'),
                        sizes: [96, 128, 192, 256, 384, 512],
                        destination: path.join('assets', 'icons')
                    },
                ],
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.m?js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']  
                        },
                    },
                },
            ],
        },
    };
