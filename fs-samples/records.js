var fs = require("fs")

var rec = [{name: "Sridhar", age: 55, address: "1432, NE Carlaby Way"},
           {name: "Radhika", age: 62, address: "1432, NE Carlaby Way"}]

fs.writeFile('records.txt',JSON.stringify(rec),(err)=>{
    if(err)
        console.log(err)
})

fs.readFile('records.txt', (err,data) =>{
    if(err) 
    console.log(err)
    var tmp = JSON.parse(data.toString())
    console.log(tmp)
    for(var i=0; i< tmp.length; i++){
        console.log(tmp[i].name)
    }
    
})