const { MongoClient, ServerApiVersion } = require('mongodb');
var cors = require('cors');
const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = process.env.PORT || 5000;

//Middlewire
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://<UserName>:<PassWord>@cluster0.rikoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//Multiple Input--------------------
async function run() {
  try {
    await client.connect();

    const database = client.db("DemoUsers");
    const users = database.collection("usersinfo");
    
    //GET Method
    app.get('/users', async (req, res) =>{
      const cursor = users.find({});
      const user  = await cursor.toArray();
      res.send(user);
    });
    
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await users.findOne(query);
      res.send(result);
    });
    
    //POST Method
    app.post('/users',async (req, res) =>{
      const newUser = req.body;
      const result = await users.insertOne(newUser);
      console.log(`documents were inserted`);
      res.json(result);
    });
    
    //DELETE Method
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await users.deleteOne(query);
      console.log('Deleting!!', result);
      res.json(result);
    });
    
    
    //PUT Method
    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const userData = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const usersUpdate = {
        $set: {
          Name: userData.Name,
          Email: userData.Email
        },
      };
      const result = await users.updateOne(filter, usersUpdate, options);
      res.json(result);
    })
    
    
    
    
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

//POST Method
// app.post('/users', (req, res) =>{
//   const newUser = req.body;
//   console.log('This is post body', req.body);
//   res.json(newUser);
// })


//GET method
app.get('/', (req, res) => {
    res.send('This is Get!!!');
})


// Port Listening
app.listen(port, () => {
    console.log(`Listening port ${port}`);
})