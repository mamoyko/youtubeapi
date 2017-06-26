const express = require('express');
const app = express();
const path = require('path');


app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html')
});

app.listen(process.env.PORT || 3000, function(){
	console.log('listening on port 3000');
});


//api key AIzaSyBcdGS8nEXF-Qw94qoss-DmvZuxI5z4MtI