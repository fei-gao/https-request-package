let request = require('request');
let fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function(err){
    throw err;
})

.on('response', function(response){
    console.log('Response Status Code: ', response.statusCode, "\nresponse message is", response.statusMessage, "\ncontent type is", response.headers['content-type']);
})

.pipe(fs.createWriteStream('./future.jpg'))

.on('finish', function(){
    console.log('Download complete.')
});

console.log('Downloading image...');
