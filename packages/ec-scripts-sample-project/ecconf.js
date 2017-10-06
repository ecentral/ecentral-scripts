module.exports = {
    presets: ['react'],
    options: {
        devMode: true,
        testMode: false,
        port: 9999,
        entryFiles: [
            'styles/main.scss',
            'index-react.js',
        ],
        title: 'eC Sample Project',
        htmlTemplate: './src/templates/index.ejs',
    },
};
