const express=require('express');
const app=express();
const cors=require('cors');
const { MongoClient } = require('mongodb'); 


let user=[]
let db = ''


async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://anshif:nesRoWgW5SqAD0yF@cluster0.8dtglzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('test');
   ;
 }
 
 
app.use(cors());
app.use(express.json());
app.get('/users', async function(req,res){

    let output = await db.collection('stock').find().toArray();
    res.json(output);

})


app.post('/Signup', async function(req, res) {
    let output = await db.collection('user').insertOne(req.body);
    console.log(req.body);
})

app.listen(5002,function(){
    console.log("listening on port 5002");
    mongoConnect()
})