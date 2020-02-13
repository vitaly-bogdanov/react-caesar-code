{
  loader: 'css-loader',
  options: {
    minimize: env.NODE_ENV === 'production',
    modules: true,
    localIdentName: '[path][name]__[local]--[hash:base64:5]'
  }
}