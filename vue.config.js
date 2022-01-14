module.exports = {
    publicPath: '/standaarden/',
    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.html$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },
}
