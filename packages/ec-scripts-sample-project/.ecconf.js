module.exports = {
    presets: ['react', 'sass'],
    options: {
        entryFiles: [
            'styles/main.scss',
            'index-react.js',
        ],
        title: 'eC Sample Project',
        htmlTemplate: './templates/index.ejs',
        port: 9999,
    },
};
