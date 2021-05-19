

$(function(){
    $('.box1').on('click', function(){
        $('.box1').addClass('box1-ext');
    });
    $('.book1').mouseout(function(){
        $('.box1').removeClass('box1-ext');
    });
});

/*$(function(){
    $('.box1').mouseover(function(){
        $('.box1').addClass('box1-ext');
    });
    $('.box1').mouseout(function(){
        $('.box1').removeClass('box1-ext');
    });
});

/*$(function() {
    $('.box1').css({
        'background-color': '#0000FF',
        'height': '100px'
    });*/
//});
/*$(function(){
    $('.box1').hide();
});


/*$(document).ready(function () {
    $('body').html('<h1>Hello jQuery!!</h1>');
  });
/*$(document).ready(function () {
    $('body').html('<h1>Hello JQuery!!</h1>');
})*/