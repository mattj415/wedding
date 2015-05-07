var express   =    require("express");
var mysql     =    require('mysql');
var bodyParser  =  require("body-parser");
var app       =    express();

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'wedding',
    debug    :  false
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


function handle_database(req,res) {
    var hashkey = req.params.hashkey;
    var requestType = req.params.requestType;
    pool.getConnection(function(err,connection){
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }

        console.log('connected as id ' + connection.threadId);

        if ( requestType == 'guest' ) {
            connection.query("select * from guests WHERE hashkey = ?", [hashkey], function (err, rows) {
                connection.release();
                if (!err) {
                    res.json(rows);
                    console.log('success');
                    console.log(rows);
                } else {
                    console.log("DB error with select: " + err);
                }
            });
        } else if ( requestType == 'response'){
            console.log("attending:" + req.body.attending.value + " num:" + req.body.number.value );
            connection.query("UPDATE guests SET responded = 1, guests_attending = ? WHERE hashkey = ?", [req.body.number.value, hashkey], function (err, rows) {
                connection.release();
                if (!err) {
                    console.log('success');
                } else {
                    console.log("DB error with update: " + err);
                }
            });
            res.end('It worked!');
        }

        connection.on('error', function(err) {
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        });
    });
}
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    // Pass to next layer of middleware
    next();
});
app.get("/wedding/rsvp/:requestType/:hashkey",function(req,res){

    handle_database(req,res);
});

app.post("/wedding/rsvp/:requestType/:hashkey",function(req,res){
    handle_database(req,res);
});
app.listen(3000);