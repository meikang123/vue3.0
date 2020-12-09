const { env: { app = 'main' } } = process;

module.exports = {
  configureWebpack: config => {
    config.entry.app = `./src/${app}.ts`
  }
}
