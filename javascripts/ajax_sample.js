$(function() {
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");
  let number = 0;

  function getData() {
    button.click(function(){
      $.ajax('ajax.json',{
        type: 'GET',
        success: function(data) {
          titleArea.html(data[number].title);
          contentArea.html(data[number].content);
          videoArea.attr('src', data[number].url);
          number == 2 ? number = 0 : number++;
        },
      })
    });
  };

  getData();
})