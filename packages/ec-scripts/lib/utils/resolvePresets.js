const path = require('path');
const requireConfig = require('./requireConfig');
const settings = require('../settings');

/**
 * Resolves the configurations including presets and the base ec-scripts package.
 * @param [appPath=settings.appPath] An optional path to the project's ecconf.js (without filename).
 * @returns {Object[]} The configuration objects of ec-scripts, presets and app.
 */
const resolvePresets = (appPath = settings.appPath) => {
    const config = requireConfig(appPath);

    // Add ec-scripts as initial configuration.
    const presets = ['ec-scripts']
        // Prefix other presets.
        .concat((config.presets || []).map(preset => `ec-scripts-preset-${preset}`));

    return presets.map((preset) => {
        // require.resolve refers to the `main` entry in package.json be default.
        // Therefore we require the package.json itself.
        let presetConfigPath = require.resolve(`${preset}/package.json`, { paths: [appPath] });
        // Then fall back to the package root directory.
        presetConfigPath = path.dirname(presetConfigPath);
        return requireConfig(presetConfigPath);
    }).concat([config]);
};

module.exports = resolvePresets;
