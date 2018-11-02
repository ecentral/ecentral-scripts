const path = require('path');

module.exports = {
    runners: (config) => ({
        ...config.runners,

        webpack: {
            '$module.rules[**][test=/\\.css$/]': (rule) => ({
                ...rule,
                test: /\.(css|scss)$/,
                use: [
                    ...rule.use,
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: [
                                path.resolve(config.options.srcDir, config.options.stylesDir),
                            ],
                        },
                    },
                ],
            }),
        },
    }),
};
