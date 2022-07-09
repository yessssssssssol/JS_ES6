var name = 'global var';

function home() {
  var hovar = 'homevar';
  for (var i = 0; i < 100; i++) {}
  console.log(i);
}
home();
