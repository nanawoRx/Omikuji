console.log("実行開始")
console.log("実行終了")
//変数定義
var luck, lucky_zodiac, compa_zodiac, good_food;
var luck_array = []; //運勢
var lucky_zodiac_array = [[]]; //ラッキー星座と豆知識
var compa_zodiac_array = []; //相性の良い星座
var good_food_array = []; //食べ物
var password = 1000;



//説明＆おみくじ開始ボタンの表示
function display_omikuji(){
    //要素の取得   
    var omikujiID = "start";
    var input_pass = parseInt(document.getElementById("pass").value);

    //入力された値とパスワードの確認
    if(input_pass === password){
        document.getElementById(omikujiID).style.display = "block";
        }

    else{
        document.getElementById(omikujiID).style.display = "none";
            
        //エラーアラートの表示
        alert("error：パスワードが違います");
    }
}

//おみくじのランダム選択
function select(){
    luck = luck_array[Math.floor(Math.random()*luck_array.length)]
    compa_zodiac = compa_zodiac_array[Math.floor(Math.random()*compa_zodiac_array.length)]
    lucky_zodiac = lucky_zodiac_array[Math.floor(Math.random()*lucky_zodiac_array.length)]   
    good_food = good_food_array[Math.floor(Math.random()*good_food_array.length)]
    }

/*
//おみくじの結果
function display_result_omikuji(){
    select();
var result = "運勢: " + luck + "<br>" +
"ラッキー星座: " + lucky_zodiac[0] + "<br>"+
"豆知識: " + lucky_zodiac[1]+"<br>" +
"相性の良い星座: " + compa_zodiac + "<br>" +
"今日食べると良いもの: " + good_food + "<br>" ;

// 出力をHTML内の要素に挿入
var resultElement = document.getElementById("result");
resultElement.innerHTML = result;
}
*/