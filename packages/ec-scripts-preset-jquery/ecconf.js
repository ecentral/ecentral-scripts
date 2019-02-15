const webpack = require('webpack');

module.exports = {
    addons: {
        eslint: {
            // https://eslint.org/docs/user-guide/configuring#specifying-environments
            env: { jquery: true }
        }
    },
    runners: {
        webpack: {
            plugins: (plugins) => ([
                ...plugins,
                // https://webpack.js.org/plugins/provide-plugin/
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery',
                })
            ])
        }
    }
};
