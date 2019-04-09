var express = require('express');
var app = express();

//Listening to nodeJS Application
const PORT= 3000;

app.listen(PORT, ()=>{
    console.log('Listening to PORT:' +PORT);
});


//Setting View Engine
app.set('view engine', 'pug');

//Setting public folder
app.use(express.static('public'));
/*app.use('/bootstrap', express.static(__dirname, + '/node_modules/bootstrap/dist/css/'));*/
//Default Route
app.get('/', function(req, res){
    res.render('login')
});
