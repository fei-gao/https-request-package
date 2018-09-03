let request = require('request');
let fs = require('fs');

//request is a stream / asynchronous, 
//and streams generally respond to a certain four functions 
request.get('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function(err){
    throw err;
})

.on('response', function(response){
    console.log('Response Status Code: ', response.statusCode, "\nresponse message is", response.statusMessage, "\ncontent type is", response.headers['content-type']);
})

//Pipes are an interface for converting 
//between readable and writable streams.

//fs.createWriteStream handles the incoming readable data stream, 
//transforming it into a writable data stream
.pipe(fs.createWriteStream('./future.jpg'))

.on('finish', function(){
    console.log('Download complete.')
});

console.log('Downloading image...');
