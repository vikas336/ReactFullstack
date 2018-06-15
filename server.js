var express = require('express')
var webpack = require('webpack')
var bodyParser = require('body-parser')

var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./webpack.config')

var path = require('path')
var app = new express();


app.get("/", function(req,res)
{
    res.sendFile(__dirname + '/public/index.html')
})

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

var port = process.env.NODE_PORT

app.listen(port,function(error)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.info("Open http://localhost:%s/ in Browser", port);
        console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
    }
})

app.use(express.static(__dirname + '/public/'));