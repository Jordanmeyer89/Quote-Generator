function randRgb() {
  var rgb = 'rgb(';
  for (var i = 0; i < 3; i++) {
    rgb += (Math.floor(Math.random() * 256));
    if (i < 2) { rgb += ', ';}}
  rgb += ')';
  return rgb;
}

$(document).ready(function(){
  $("body").css("background-color", randRgb);
  getQuote();
});

  $("#more").click(function(){
    $("body").css("background-color", randRgb);
    getQuote();
      });  

function getQuote() {
  var url = 'http://api.forismatic.com/api/1.0/';
  $.ajax({
      url: url,
      jsonp: "jsonp",
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp',
      }
    })
    .done(function(data) {
      var quoteText = data.quoteText;
      var quoteAuthor = data.quoteAuthor || 'Anonymous';
      $('#quote-block').html('<p id="quote"></p><p><i id="author"></i></p>');
      $('#quote').html(quoteText);
      $('#author').html('~ ' + quoteAuthor);
    if (quoteText.length > 86){
  var newQuote = quoteText.substring(0,82) + "..."; 
} else {
  var newQuote = quoteText; };
    
var twit = document.getElementById("twitShit");  
twit.href = ("https://twitter.com/intent/tweet?text=" + newQuote + "&hashtags=FCC,Quotes&via=kaladinstorms");

    })
    .fail(function(err) {
      console.log(err);
    });
}


