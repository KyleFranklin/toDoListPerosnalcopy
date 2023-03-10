const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


const url = 'mongodb+srv://User:Pass@fridge.gdztlsl.mongodb.net/?retryWrites=true&w=majority';
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(url);
client.connect(console.log("mongodb connected"));

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/addUser', async (req, res, next) =>
{
  // incoming: userId, color
  // outgoing: error
	
  const fname = req.body["firstName"]
  const lname = req.body["lastName"]
  const uid = req.body["user"]
  const pass = req.body["password"]

  const newUser = {firstName:fname,lastName:lname,user:uid,password:pass};
  var error = '';

  try
  {
    const db = client.db("Fridge");
    const result = db.collection('Users').insertOne(newUser);
  }
  catch(e)
  {
    error = e.toString();
  }

  //cardList.push( card );

  var ret = { error: error };
  res.status(200).json(ret);
});


app.post('/api/login', async (req, res, next) => 
{
  // incoming: login, password
  // outgoing: id, firstName, lastName, error
	
 var error = '';

  const user = req.body["Login"];
  const password = req.body["Password"];
  
  const db = client.db("Fridge");
  const results = await db.collection('Users').find({user:user,password:password}).toArray();
  
  var id = -1;
  var fn = '';
  var ln = '';

  if( results.length > 0 )
  {
    id = results[0].user;
    fn = results[0].firstName;
    ln = results[0].lastName;
  }

  var ret = { id:id, firstName:fn, lastName:ln, error:''};
  res.status(200).json(ret);
});

app.post('/api/searchcards', async (req, res, next) => 
{
  // incoming: userId, search
  // outgoing: results[], error

  var error = '';

  const { userId, search } = req.body;

  var _search = search.trim();
  
  const db = client.db("COP4331Cards");
  const results = await db.collection('Cards').find({"Card":{$regex:_search+'.*', $options:'r'}}).toArray();
  
  var _ret = [];
  for( var i=0; i<results.length; i++ )
  {
    _ret.push( results[i].Card );
  }
  
  var ret = {results:_ret, error:error};
  res.status(200).json(ret);
});









app.listen(5050); // start Node + Express server on port 5000
