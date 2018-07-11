const ejs = require('ejs');

ejs.renderFile('./view/1.ejs', {name: 'lean'}, function(err, data) {
    if (err) {
        console.log('编译失败')
    } else {
        console.log(data)
    }
})