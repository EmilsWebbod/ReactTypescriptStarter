const sass =  require('node-sass');

module.exports = {
  process(src, path) {
    if (path.endsWith('.css') || path.endsWith('.scss')) {
      return {}
    }

    return src;
  },
};