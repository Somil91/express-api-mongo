// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID,  } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to mongo db server');
    } 
    
    console.log('Connected to MongoDB server');

    //Find query

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a072765757f847308474dfd')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    /**
     * Count Query
     */
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })


    /**
     * Query for find with User collection
     */
    db.collection('Users').find({
        name: 'Sam'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    })

    // db.close();
});