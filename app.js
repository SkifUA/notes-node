console.log('Starting app');

const fs = require('fs');
// const os = require('os');
const _ = require ('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

// example note = { title: 'secret', body: 'text body'}
// example tape: node app.js add --title=secret --body="text body"

var argv = yargs.argv;
var command = argv._[0];

console.log('Process:', process.argv);
console.log('Yargs:', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note Title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {

  noteRemoved = notes.removeNote(argv.title);
  message = noteRemoved ? 'Note wos removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}


// var command = process.argv[2];
// console.log(command);

// console.log(_.isString(true));
// console.log(_.isString('true'));

// var arrayFiltered = _.uniq([2, 7, 'qwe', 1, 2, 'qwe', 8, 0, 7, 1, 'fghj']);
// console.log(arrayFiltered);

// var res = notes.addNote();

// console.log('res :', notes.add(12, -5));

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello world ${user.username}! You age ${notes.age}.\n`, function (err)  {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
