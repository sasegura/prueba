const withImages = require('next-images')
// module.exports = withImages();

module.exports = {assetPrefix: './', ...withImages()}