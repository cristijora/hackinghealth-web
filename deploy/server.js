/**
 * Created by cristian.jora on 04.11.2016.
 */
var express = require('express');
var history = require('connect-history-api-fallback');
var serveStatic = require("serve-static")
app = express();
app.use(history());
app.use(serveStatic(__dirname));
var port = process.env.PORT || 80;
app.listen(port);
console.log("server started "+port);


