module.exports = {
    presets: ['react'],
    options: {
        devMode: true,
        port: 9999,
        entryFiles: [
            'styles/main.scss',
            'index-react.js',
        ],
        title: 'eC React App',
        htmlTemplate: './src/templates/index.ejs',
    },
};
