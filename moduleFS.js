var fs = require('fs');
fs.readFile('callback.js','utf8',function(e,data){
    if (e) throw e;
    var text = data.toString();
    console.log(text);
});
