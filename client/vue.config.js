module.exports = {
  configureWebpack: {
    devServer: {
      port: 3000,
      // https://github.com/vuejs-templates/webpack/issues/378
      watchOptions: {
        poll: true,
      },
    },
  },
  pages: {
    app: {
      entry: 'src/main.ts',
      template: 'public/index.html',
    },
  },
};
