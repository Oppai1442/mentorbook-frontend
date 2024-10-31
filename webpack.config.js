const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx', // Đường dẫn đến tệp entry của bạn
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
        publicPath: '/', // Đảm bảo rằng publicPath được thiết lập
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // Giữ nguyên cấu trúc thư mục và tên tệp
                        },
                    },
                ],
            },
            {
                test: /\.css$/, // Thêm quy tắc để xử lý CSS
                use: ['style-loader', 'css-loader'],
            },
            // Có thể thêm các quy tắc khác ở đây
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Các định dạng tệp mà Webpack sẽ nhận diện
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Thư mục phục vụ
        hot: true, // Bật Hot Module Replacement
        historyApiFallback: true, // Hỗ trợ cho React Router
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Bật HMR
    ],
};