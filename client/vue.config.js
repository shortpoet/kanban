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
  // pages: {
  //   app: {
  //     entry: 'H:\\source\\lrn\\lachlan-miller\\kanban\\client\\src\\main.ts',
  //     template: 'H:\\source\\lrn\\lachlan-miller\\kanban\\client\\src\\public\\index.html',
  //   },
  // },
};
