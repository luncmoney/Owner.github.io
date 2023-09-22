// const { time } = require('console');
let express = require('express');
// const { copyFile } = require('fs');
// const { connected } = require('process');
// let https = require('https-server');/

app.use(express.static("./index.html"))

const port = 8080;
app.listen(port, () => console.log(`网站服务器启动,访问:"http://127.0.0.1:${port}"`));

app.listen(postMessage);