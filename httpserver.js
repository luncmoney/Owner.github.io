//导入http模块
const http = require('http')
//导入fs模块
const fs = require('fs')
//导入path模块
const path = require('path')

//实例化一个服务器对象
const server = http.createServer()

//给服务器绑定一个request事件
server.on('request',(req,res)=>{
    //拿到客户端的请求地址
    const url = req.url
    //将请求的页面的地址拿到拼接成一个物理地址
    const fspath = path.join(__dirname,url);
    //读取文件fspath
    fs.readFile(fspath,'utf8',function (err,data) {//注意编码格式
        if(err) return console.log('文件读取失败'+err.message);
        //将读取的文件内容渲染到浏览器页面
        res.end(data)
    })
})
//启动服务器
server.listen(8080,()=>{
    console.log('服务器在运行在127.0.0.1:8080');
})