const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb+srv://roushanv:a1b2c3d4f5g6@cluster0.pswiy9x.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        console.log('error connecting to DATABASE!');
    }
    console.log('connected to DATABASE')

    const db = client.db('taskManager');
    db.collection('users').insertOne({
        name: 'Roushan',
        age: 36,
    });


})