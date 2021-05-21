API_KEY = "35d13dad18b59f5e6173597c70782596"

$(function(){
    $('#btn').on('click', function() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
        dataType : 'jsonp',
    }).done(function (data){
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#humidity').text(data.main.humidiy);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data){
     alert('通信に失敗しました。')
    });

    });
});