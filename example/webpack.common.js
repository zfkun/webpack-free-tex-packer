const path = require('path');

const WebpackFreeTexPacker = require('../index');

module.exports = {
  target: 'web',
  entry: {
    index: './src/index'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: path.resolve(__dirname, 'src'),
        loader: "babel-loader"
      },
    ]
  },
  plugins: [
    // Basic usage
    // - http://localhost:8080/pack-result.png
    // - http://localhost:8080/pack-result.json
    // new WebpackFreeTexPacker(path.resolve(__dirname, 'atlases')),

    // Advanced usage
    new WebpackFreeTexPacker(
        [
            path.resolve(__dirname, 'atlases/10.png'),
            path.resolve(__dirname, 'atlases/11.png'),
            path.resolve(__dirname, 'atlases/12.png'),
            path.resolve(__dirname, 'atlases/dir1'),
            path.resolve(__dirname, 'atlases/dir2/.'),
        ],
        'assets',
        {
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
        }
    ),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
