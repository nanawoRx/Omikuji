console.log("実行開始")
console.log("実行終了")
var password = 1000
window.onload = function judge() {
    var input_pass = prompt("パスワード");
    //入力された値とパスワードの確認
    if (input_pass != password){
        //エラー表示
      alert("パスワードが違います")
      judge()
    }
}