const path = require('path');

const appPath = process.cwd();
// Check if preset contains only characters, numbers and -
const presetNameRegEx = /^[a-z0-9-]+$/i;
const presetNamePrefix = 'ec-scripts-preset-';

module.exports = {
    appPath,
    presetNameRegEx,
    presetNamePrefix,
};
