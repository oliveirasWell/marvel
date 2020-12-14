module.exports = function presets(api) {
  const env = api.cache(() => process.env.NODE_ENV);
  const envConfig = { modules: false };
  const plugins = [
    'inline-react-svg',
    '@babel/plugin-proposal-optional-chaining',
  ];

  if (env === 'test') {
    delete envConfig.modules;
    plugins.push('@babel/plugin-transform-modules-commonjs');
    plugins.push('@babel/plugin-transform-runtime');
  }
  plugins.push('@babel/plugin-syntax-dynamic-import');

  return {
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      ['@babel/preset-env', envConfig],
    ],
    plugins,
  };
};
