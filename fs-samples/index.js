var fs = require('fs');

var newLine = "This is added to the file...";
/*
fs.writeFile('main.txt', newLine, function(err){
    if(err){
        console.log("catnt write ");
    }
} )
*/
fs.appendFile('main.txt',"Add this to file", function(err){
    if(err){ console.log("Cannot Append")}
})

fs.readFile('main.txt', {encoding: 'utf8'}, function(err,data){
    if(err){
        console.log("File Not Found")
    }else{
        console.log("Data: " + data);
    }
})