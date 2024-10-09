const path = require('path');

module.exports = {
    entry: './src/index.js', // Đường dẫn đến tệp entry của bạn
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
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
            // Có thể thêm các quy tắc khác ở đây
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Các định dạng tệp mà Webpack sẽ nhận diện
    },
    // Các tùy chọn khác...
};