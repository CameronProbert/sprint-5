example1(7);
fizzbuzz(1, 100);
chessboard(8);

function example1(length){
var text = '';
for (var i=0; i<length; i++){
  text += '#';
  console.log(text);
}
}

function fizzbuzz(start, end){
  var fizz = 3;
  var buzz = 5;
  for (var i = start; i <= end; i++){
    var text = i;
    if (i % fizz == 0 && i % buzz == 0)
      text = 'fizzbuzz';
    else if (i % fizz == 0)
      text = 'fizz';
    else if(i % buzz == 0)
      text = 'buzz';
    console.log(text);
  }
}

function chessboard(size){
  for (var y = 0; y < size; y++){
    var text = '';
    for (var x = 0; x < size; x++){
      if (x % 2 == y % 2)
        text += ' ';
      else
        text += '#';
    }
    console.log(text);
  }
}
