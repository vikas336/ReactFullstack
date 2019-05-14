var express = require('express')
var webpack = require('webpack')
var path = require('path')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new express();
var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

var port = process.env.NODE_PORT

app.listen(port, function (error) {
    if (error) {
        console.error(error);
    }
    else {
        console.info("Open http://localhost:%s/ in Browser", port);
        console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
    }
})

app.use('/public',express.static(path.join(__dirname + '/public/')));

// Added * to catch all routes after /. Always place this at the bottom so other routes can be taken care off, e.g. static files or POST/GET routes.
app.get("/*", function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})