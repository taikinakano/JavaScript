
var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください");
while ((user_hand != "グー") && (user_hand !="チョキ") && (user_hand != "パー") && (user_hand != null)){
    alert("グー・チョキ・パーのいずれかを入力してください")
    user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);

if (user_hand != null){
    alert("あなたの選んだ手は" + user_hand + "です\nJavaScriptの選んだては" + js_hand + "です。\n結果は" + judge + "です");
} else {
    alert("またチャレンジしてね")
}

function getJShand(){
    var js_hand_num = Math.floor(Math.random() * 3);
    var hand;
    if (js_hand_num == 0){
        hand = "グー";
    } else if (js_hand_num == 1){
        hand = "チョキ";
    } else if (js_hand_num == 2){
        hand = "パー"
    }
    return hand;
}

function winLose(user, js) {
    var winLosestr;
    if (user == "グー"){
     if (js == "グー"){
         winLoseStr = "あいこ";
     } else if (js == "チョキ"){
         winLoseStr = "勝ち";
     } else if (js == "パー"){
         winLoseStr = "負け";
     }
    } else if (user == "チョキ"){
       if (js == "グー"){
           winLosestr = "負け";
       } else if (js == "チョキ"){
           winLosestr = "あいこ";
       } else if (js == "パー"){
           winLoseStr = "勝ち";
       } else if (js == "パー"){
           winLoseStr = "あいこ";
       }
    }
    return winLoseStr;
}



/*var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");

var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだては" + js_hand + "です。\n結果は" + judge + "です。");



function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;

    if(js_hand_num == 0){
        hand_name = "グー";
    } else if(js_hand_num == 1){
        hand_name = "チョキ";
    } else if(js_hand_num == 2){
        hand_name = "パー";
    }

    return hand_name;
}

function winLose(user, js){
    var winLoseStr;
    
    if(user == "グー"){
        if(js == "グー"){
         winLoseStr = "あいこ";
        } else if(js == "チョキ"){
         winLoseStr = "勝ち";
        }else if(js == "パー"){
         winLoseStr = "負け";
        }
    } else if(user == "チョキ"){
        if(js == "グー"){
         winLoseStr = "負け";
        } else if(js == "チョキ"){
         winLoseStr = "あいこ";
        } else if(js == "パー"){
         winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
         winLoseStr = "勝ち";
        } else if(js == "チョキ"){
         winLoseStr = "負け";
        } else if(js == "パー"){
         winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}

/*var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");

alert("あなたの選んだ手は" + user_hand + "です。");

/*var promptStr = prompt("何か好きな文字を入力してください。");

alert(promptStr);

/*var alertString;
alertString = addString("WebCanp");

alert(alertString);

function addString(strA){
    var addStr = "Hello" + strA;
    return addStr;
}


////var hello = 'Hello World'
/*alert(hello);
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
var i;
var num = 0;

for(i = 1;i<11;i++){
 num = num + i;
}

alert("1から10まで足し算した結果は" + num + "です")；
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

alert('２をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');*/