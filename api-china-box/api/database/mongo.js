var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongo:mongodb+srv://betinho:Sesi0121senh@@devbackend.wlhqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (err, db) {
    if(err) throw err

    db.collection('mammals').find().toArray(function (err, result) {
        if(err) throw Error

        console.log(result) 
    })
})