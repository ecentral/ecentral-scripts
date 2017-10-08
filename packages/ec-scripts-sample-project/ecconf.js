module.exports = {
    presets: ['react'],
    options: {
        entryFiles: [
            'styles/main.scss',
            'index-react.js',
        ],
        title: 'eC Sample Project',
        htmlTemplate: './src/templates/index.ejs',
        port: 9999,
    },
};
