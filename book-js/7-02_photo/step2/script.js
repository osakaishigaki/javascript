$(document).ready(function(){
  var dataURL = 'https://api.instagram.com/v1/users/self/media/recent';
  var photoData;

  var getData = function(url) {
    $.ajax({
      url: url,
      dataType: 'jsonp',
      data: {
        access_token: '＜アクセストークン＞',
        count: 12
      }
    })
    .done(function(data) {
      photoData = data;
      console.dir(photoData);
    })
    .fail(function() {
      $('#gallery').text('データの読み込みに失敗しました。');
    })
  }

  getData(dataURL);
});