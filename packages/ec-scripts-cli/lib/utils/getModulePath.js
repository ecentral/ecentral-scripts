const path = require('path');
const settings = require('../settings');

const getModulePath = (pkgName) => (
    require.resolve(pkgName, { paths: [settings.appPath] })
);

module.exports = getModulePath;
