module.exports = {
   'env': {
      'browser': true,
      'commonjs': true,
      'es6': true,
   },
   'extends': [
      'google',
   ],
   'globals': {
      'Atomics': 'readonly',
      'SharedArrayBuffer': 'readonly',
   },
   'parserOptions': {
      'ecmaVersion': 11,
   },
   'rules': {
      'new-cap': 0,
      'capIsNew': 0,
      'newIsCap': 0,
      'indent': 0,
      'require-jsdoc': 0,
   },
};
