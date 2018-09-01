var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


var serverOptions = {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    },
    historyApiFallback: true,
    contentBase: 'src'
};

var compiler = webpack(config);
var webpackDevServer = new WebpackDevServer(compiler, serverOptions);

var port = process.env.PORT || 3000;

webpackDevServer.listen(port, function (err) {
    if (err) {
        throw err
    }
    console.log('webpack dev server listening on %s', port);
})
