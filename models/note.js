//requiring mongoose
var mongoose = rquire("mongoose");
//create schema
var Schema = mongoose.Schema;
var NoteSchemma = new Schema({
    title: {
        type: string,
    },
    body: {
        type: string,
        rquire: true
    },

})
//create Note model with the Noteschema
var Note = mongoose.model("Note", NoteSchema);
// export Note model

module.exports = Note;