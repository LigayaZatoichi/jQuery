// jQuery

$(document).ready(function(){


  $('#fadeBox').click(function(){

    $('#mainBox').fadeToggle(500);

  });


  $('#slideBox').click(function(){

    $('#mainBox').slideToggle(500);

  });

  $('#mainBox').click(function(){

    $('ul li:nth-child(2), #mainBox, #fadeBox, #slideBox, #container').fadeTo(500, 0.1);

  });

});
