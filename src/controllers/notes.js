const Note = require('../models/note');

const getNotes = (req, res) => {
  Note.find()
    .then((result) => res.send(result))
    .catch((error) => console.error(error));
};

const getNote = (req, res) => {
  const { id } = req.params;

  Note.findById(id)
    .then((result) => {
      result
        ? res.send(result)
        : res.code(404).send({
            statusCode: 404,
            error: 'Not Found',
            message: 'Note not found with given id',
          });
    })
    .catch((error) => {
      console.error(error);

      res.code(400).send({
        statusCode: 400,
        error: 'Bad request',
      });
    });
};

const addNote = (req, res) => {
  const { content } = req.body;

  Note.create({ content, date: new Date() })
    .then(() => {
      res.code(201).send({
        statusCode: 201,
        message: 'Created',
      });
    })
    .catch((error) => {
      console.error(error);

      res.code(400).send({
        statusCode: 400,
        error: 'Bad request',
      });
    });
};

const deleteNote = (req, res) => {
  const { id } = req.params;

  Note.findByIdAndDelete(id)
    .then((result) =>
      result
        ? res.send({
            statusCode: 200,
            message: 'Deleted',
          })
        : res.code(404).send({
            statusCode: 404,
            error: 'Not Found',
            message: 'Note not found',
          })
    )
    .catch((error) => {
      console.error(error);

      res.code(400).send({
        statusCode: 400,
        error: 'Bad request',
      });
    });
};

const editNote = (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  Note.findByIdAndUpdate(id, { content })
    .then((result) => {
      result
        ? res.send({
            statusCode: 200,
            message: 'Edited',
          })
        : res.code(404).send({
            statusCode: 404,
            error: 'Not Found',
            message: 'Note not found with given id',
          });
    })
    .catch((error) => {
      console.error(error);

      res.code(400).send({
        statusCode: 400,
        error: 'Bad request',
      });
    });
};

module.exports = { getNotes, getNote, addNote, editNote, deleteNote };
