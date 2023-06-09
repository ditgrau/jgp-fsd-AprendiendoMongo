const express = require('express')
const app = express();
const PORT = 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const connectionString = `mongodb+srv://juditGrau:fsdAbril23@clusterfsd.gmcaflb.mongodb.net/notes?retryWrites=true&w=majority`
/* frase del enlace de mongo - he añadido 'notes': será el nombre de mi bd*/
////////////////////////////////////////////

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send ('Hello world')
})

/*mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!')); */

const dbMongoose = mongoose.connect(connectionString)

dbMongoose.then (()=> {
    app.listen(PORT, ()=> console.log('conected at '+PORT))
})
.catch ((error)=> console.error('error server', error.message))





// mongoose instanceof mongoose.Mongoose; // true

// Create a new Mongoose instance with its own `connect()`, `set()`, `model()`, etc.
// const m = new mongoose.Mongoose();