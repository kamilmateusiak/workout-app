module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: [
          'Chrome 18', // SmartClient (win) 8.0.X.X
          'Chrome 41', // SmartClient (win) 8.1.X.X
          'Chrome 45', // SmartClient (win) 8.3.X.X
          'Chrome 47', // SmartClient (win) 8.4.X.X
          'last 15 Chrome versions',
          'last 15 Firefox versions',
          'last 10 Opera versions',
          'last 5 Edge versions',
          'last 2 Safari versions',
          'IE 10',
          'IE 11'
        ],
        useBuiltIns: 'usage',
        modules: 'commonjs'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-arrow-functions', 'emotion'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            useBuiltIns: 'usage',
            debug: false
          }
        ],
        '@babel/preset-react'
      ],
      plugins: ['@babel/plugin-transform-arrow-functions', 'emotion']
    }
  }
};
