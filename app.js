var hello = 'Hello World'
alert(hello);
var int1 = 1;
var int2 = -10;
var float1 = 3.14;
var str1 = 'JavaScriptを覚えよう'
var str1 = 'Hello';
var str2 = "World!!";
var orange = 100;
var apple = 120;
var max = 100;
var num = 1;
var count = 0;
alert(int2);
alert(str1 + str2);
alert('Hello'+'World');

if(orange<apple){
  alert('みかんの値段がりんごよりやすい')
}else if(orange == apple){
  alert('みかんとりんごが同じ値段')
}else{
  alert('みかんの値段がリングより高い')
}

while(num < max){
  num = num*2;
  count = count + 1;
}

alert('２をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');