var express = require('express')
var app = express()
var xmlwriter = require('xml-writer')
var path = require('path')

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/xml', function (req, res) {
  var xw = new xmlwriter;
  xw.startDocument().startElement("albums")
  
  xw.startElement("album")
  xw.writeElement("title", "sridhar")
  xw.endElement()

  xw.startElement("album")
  xw.writeElement("title", "radhika")
  xw.endElement()

  xw.endElement()

  res.set('Content-Type', 'text/xml')
  res.send(xw.toString())
})


app.get('/json', function (req, res) {
  var albums = [{ title: 'sridhar'},{title: 'radhika'}] 
  res.json(albums)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})