const {
  getNotes,
  getNote,
  addNote,
  editNote,
  deleteNote,
} = require('../../controllers/notes');

const notesRoutes = (route, options, done) => {
  route.get('/notes', getNotes);

  route.get('/notes/:id', getNote);

  route.post('/notes', addNote);

  route.delete('/notes/:id', deleteNote);

  route.put('/notes/:id', editNote);

  done();
};

module.exports = notesRoutes;
