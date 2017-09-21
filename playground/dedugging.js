var person = {
  name: 'Guest'
};

person.age = 25;

debugger;

person.name = 'User';

console.log(person);

// for startb debug
// tape: node inspect <file>
// use n for next
// use c for continue
// use repl for debug vars

// for start debug with Chrome tape:
// node --inspect-rbk <file>
