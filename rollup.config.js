import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

export default {
  entry: 'lib/js/index.js',
  plugins: [
    babel(babelrc())
  ],
  external,
  globals: {
    rome: 'rome',
    moment: 'moment'
  },
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'MaterialDatetimePicker',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
