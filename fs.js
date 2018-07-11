const fs = require('fs');

//查询文件
// fs.stat("fs/aaa.js", (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data);
//         console.log(`文件：${data.isFile()}`)
//         console.log(`目录:${data.isDirectory()}`)
//     }
// })

//创建文件夹
// fs.mkdir("logs", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('success')
//     }
// })

//写入文件
fs.writeFile('logs/hello.text', 'Hello Word!!!\n', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('success')
    }
})
//给文件追加内容
fs.appendFile("logs/hello.text", "you are cool", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('success')
    }
})
//读取文件内容
fs.readFile("logs/hello.text", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data)
    }
})