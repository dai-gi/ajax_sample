let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState == 4) {
      if (request.status == 200) {
        request.response.forEach((obj) => {
          data.push(obj);
        })
        console.log(data); // 出力結果：(3) [{…}, {…}, {…}]
        console.log(data[0]); // 出力結果：インデックス[0]のオブジェクトが表示される
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

console.log(data); // 出力結果：[]
console.log(data[0]); // undefined

window.onload = getData;