import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputPath = path.resolve(__dirname, "dist");

export default {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: outputPath,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ]
            },
            {
                test: /\.scss$/, 
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',  
                    'sass-loader'  
                ]
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        static: outputPath,
        compress: true,
        port: 3000,
        open: true,
    },
};