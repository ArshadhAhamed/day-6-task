let login = 'Employee';
let message =
  login == 'Employee'
    ? 'Hello, Employee!'
    : login == 'Director'
    ? 'Greetings, Director!'
    : login == ''
    ? 'No login'
    : '';
console.log(message);
