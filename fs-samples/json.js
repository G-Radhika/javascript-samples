var fs = require('fs')
var sridharobj = {name: 'Sridhar', age: 55, address: '1432 NE Carlaby way'}

fs.writeFile('jsonData.txt', JSON.stringify(sridharobj), (err)=>{
    if(err) 
        console.log("cant write to file")

})
fs.readFile('jsonData.txt',  {encoding: 'utf8'},function(err, data){
    if(err){
        console.log("Cant read/ File doesnot exist")
    }
    console.log(data)
    var op = JSON.parse(data)
    console.log(op)
    console.log(op.name , op.age)
})