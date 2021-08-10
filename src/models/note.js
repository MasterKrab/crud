const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  content: {
    type: 'string',
    required: true,
  },
  date: Date,
});

noteSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Note = model('note', noteSchema);

module.exports = Note;
