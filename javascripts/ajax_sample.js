let number = 0;
let data = [];
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  button.addEventListener('click', e => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          let str = JSON.stringify(request.response);
          console.log(str[0].title);
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  })
}



window.onload = getData;