const mongoose = require('mongoose')
const connectionString = `mongodb+srv://juditGrau:fsdAbril23@clusterfsd.gmcaflb.mongodb.net/juditdb?retryWrites=true&w=majority`
/* frase del enlace de mongo - he añadido 'juditdb': será el nombre de mi bd*/
////////////////////////////////////////////
//conexion a mongodb
const dbMongoose = mongoose.connect(connectionString)
dbMongoose.then (()=> {
   console.log('conected')
})
.catch ((error)=> console.error('error server', error.message))

module.exports = dbMongoose 
//exporto la funcion