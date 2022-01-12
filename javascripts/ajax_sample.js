let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  // コンストラクタ作成
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    // 下記の条件分岐は、【 if(xhr.readyState == 4 && xhr.status == 200){} 】と同義
    if(request.readyState == 4) {
      if(request.status == 200) {
        const jsonObj = JSON.parse(JSON.stringify(request.response));
        data.push(jsonObj[0]);
        debugger
      }
    }
  }
  // リクエスト
  request.open("GET", "ajax.json");
  request.responseType = "json";
  // リスエスト送信
  request.send(null);

}
console.log(data[0].title);
debugger

button.addEventListener('click', e => {
})


window.onload = getData;