const dbMongoose = require('./mongo');

const express = require('express')
const app = express();
const PORT = 5000;
const cors = require('cors');
const Note = require('./models/Note')


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send ('Hello world')
})

app.get('/api/notes', (req, res)=> {
    Note.find({}).then(result => {
        res.json(result)
    }) 
})






dbMongoose.then (()=>{ //si se conecta a la base de datos .then
    app.listen(PORT, ()=>{
        console.log (`servidor levantado en puerto ${PORT}`); 
    })
}) //si no, .catch (error)
.catch ((error)=>{
    console.error ('Error starting server', error.message);
})

/* ·documentacion· mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!')); */


