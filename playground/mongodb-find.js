const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');
  /*db.collection('Todos').find({
    _id:new ObjectID('5a726da7d1502599302811b7')
  }).toArray().then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs,undefined,2));
    },(e) =>{
      console.log(`Error in fetching data:\t${e}`);
    });*/
    /*db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
      },(e) =>{
        console.log(`Error in fetching data:\t${e}`);
      });*/
      db.collection('Users').find({
        name:'Alex'
      }).toArray().then((docs) => {
          console.log('Todos');
          console.log(JSON.stringify(docs,undefined,2));
        },(e) =>{
          console.log(`Error in fetching data:\t${e}`);
        });
  //client.close();
})
