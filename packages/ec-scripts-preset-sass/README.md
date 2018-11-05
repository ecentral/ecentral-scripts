# eC Scripts Sass/SCSS Preset

Extends eC Scripts configuration with SCSS support.

## Quick Overview

This preset enables:
- Support for Sass in `.scss` files
- A new option to define a styles folder

```js
// .ecconf.js
module.exports = {
    options: {
        // Define the directory for your basic .scss files.
        // This tells the Sass compiler where to look for imports in the first place.
        // (like _variables.scss or _mixins.scss)
        stylesDir: 'styles', // Relative to srcDir
    },
};
```

## Installation

Using eC CLI:

```
ec-cli init sass
```

If you want to add this preset to an existing project, please read the eC Scripts [installation guide](https://github.com/ecentral/ec-scripts).
