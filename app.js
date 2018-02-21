//var port = process.env.PORT || 3000,
    //http = require('http'),
    //fs = require('fs');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
//var bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


//API request for '/flicCount'
app.get('/flicCount', function(req, res) {
    console.log("get /flicCount.");
    //console.dir(req.body);

    //updateイベントを発信する(サーバーからクライアントへの発信はio.sockets.emit)
    io.sockets.emit('count'); 
  
        //実行を継続しないようにreturnでコールバックを返す
        res.send("api request for '/flicCount' is done.");
});



// エラー処理
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!: ' + err.message);
});




http.listen(port, '0.0.0.0');