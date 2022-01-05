# webpack-free-tex-packer

[![Stats](https://nodei.co/npm/webpack-free-tex-packer.png?downloads=true&stars=true)](https://www.npmjs.com/package/webpack-free-tex-packer) \
Webpack Free texture packer plugin \
Based on https://github.com/zfkun/free-tex-packer

# Install
   
$ npm install git@github.com:zfkun/webpack-free-tex-packer.git
   
# Basic usage

**webpack.config.js**

```js
const path = require('path');
const WebpackFreeTexPacker = require('webpack-free-tex-packer');

module.exports = {
    entry: {
        index: './src/index'
    },
    output: { filename: 'index.js' },
    mode: 'development',
    plugins: [
        new WebpackFreeTexPacker(path.resolve(__dirname, 'atlases'))
    ]
};
```

**Output:**

http://localhost:8080/pack-result.png \
http://localhost:8080/pack-result.json 

# Advanced usage

Use packer options object, multiple sources, custom output folder

**webpack.config.js**

```js
const path = require('path');
const WebpackFreeTexPacker = require('webpack-free-tex-packer');

const sources = [
    path.resolve(__dirname, 'atlases/10.png'),
    path.resolve(__dirname, 'atlases/11.png'),
    path.resolve(__dirname, 'atlases/12.png'),
    path.resolve(__dirname, 'atlases/dir1'),
    path.resolve(__dirname, 'atlases/dir2/.'),
];

const packOptions = {
    textureName: 'atlas',
    width: 512,
    height: 512,
    fixedSize: false,
    padding: 2,
    allowSort: true,
    allowRotation: true,
    detectIdentical: true,
    allowTrim: true,
    exporter: "Pixi",
    removeFileExtension: false,
    prependFolderName: true
};

module.exports = {
    entry: {
        index: './src/index'
    },
    output: { filename: 'index.js' },
    mode: 'development',
    plugins: [
        new WebpackFreeTexPacker(sources, 'assets', packOptions)
    ]
};
```

**Output:**

http://localhost:8080/assets/atlas.png \
http://localhost:8080/assets/atlas.json 

---

**Plugin arguments**

| prop             | type            | description                                                                                      |
| ---              | ---             | ---                                                                                              |
| sources          | String or Array | Images or folders path. Folder path, ended by ('.', '\*' or '\*.\*') includes images to atlas root. |
| output           | String          | Output folder                                                                                    |
| packOptions      | Object          | Pack options                                                                                     |

---

**Full example**

https://github.com/zfkun/webpack-free-tex-packer/tree/master/example

 * download
 * npm install
 * npm start
 * open http://localhost:8080

---

**Pack options description**: https://github.com/zfkun/free-tex-packer-core#available-options

**Custom exporters description**: https://github.com/zfkun/free-tex-packer-core#custom-exporter

# Used libs

* **Free texture packer core** - https://github.com/zfkun/free-tex-packer-core
* **Chokidar** - https://github.com/paulmillr/chokidar

---
License: MIT
