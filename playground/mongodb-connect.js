const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');
  /**db.collection('Todos').insertOne({
      text:`Semething to do`,
    completed:false
  },(err,result)=>{
    if(err){
      return console.log('unable to insert Todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });/**/
  /**-/db.collection('Users').insertOne({
      name:`Alex`,
      email:`pelagaggialex@gmail.com`,
      age:23,
      location:'Rio de Janeiro'
  },(err,result)=>{
    if(err){
      return console.log('unable to insert Users',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  });/**/
  client.close();
})
