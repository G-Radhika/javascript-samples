var readline = require("readline")

var arr = []

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('Enter numbers to be added to an array: ');

rl.setPrompt('>>')
rl.prompt()

rl.on('line', function(input){
    input = input.trim()
    if(input == 'exit'){
        rl.close();
        return
    }else{
        arr.push(input);
    }
    rl.prompt()
})

rl.on('close', function(){
    for(var i=0; i< arr.length; i++)
    console.log(arr[i]);
})