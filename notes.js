console.log('Starting notes');

const fs = require('fs');

var fethNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fethNotes();
  var note = {
    title,
    body
  }
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var removeNote = (title) => {
  var notes = fethNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);

  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

var getAll = () => {
  return fethNotes();
};

var getNote = (title) => {
  var notes = fethNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var logNote = (note) => {
  console.log('-------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}


module.exports  = {
  addNote,
  removeNote,
  getAll,
  getNote,
  logNote
};

// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };

// module.exports.add = (a, b) => {
//   return a + b;
// };
