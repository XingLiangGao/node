const jade = require('jade');
const fs = require('fs');

// var str = jade.render('html')

var str = jade.renderFile('./view/index.jade', {pretty: true})
fs.writeFile('./build/jade.html', str, function(err) {
    if(err) {
        console.log('写入失败')
    } else {
        console.log('写入成功');
    }
})
// console.log(str)