const { Schema, model } = require('mongoose')
// creamos el Schema, que será nuestra guia, patron
const noteSchema = new Schema({
    content: String,
    date: Date,
    important: Boolean
})


noteSchema.set('toJSON', { //hemos modificado los datos que recibimos del JSON 
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id    
        delete returnedObject.__v    
    }
})

/* ahora modelo. Crear una clase que nos va a permitir 
crear instancias de este schema "crea un modelo que tenga este schema y este nombre" */

const Note = model('Note', noteSchema) //un modelo que se llama Note, con el noteSchema como guia.
//'Note' se cambiara por notes.
// estos schemas son a nivel de aplicacion, esto no hace que la base de datos siga estos schemas

/*
Note.find({}).then(result => {
    console.log(result);
    mongoose.connection.close()
})

const note = new Note({
    content: 'Estoy muy contenta con la doctora',
    date: new Date(),
    important: true
})

note.save() //guardarla en la bd 
///////////utilizar SIEMPRE promesas con mongoose ///////////////
    .then(result => {
        console.log (result)
        mongoose.connection.close() //buena practica, cerrar la conexion de la bd al acabar
    })
    .catch(error => {
        console.error('aqui esta el error' + error)
    })
*/

module.exports = Note