var template = function(text) {
  alert("template - "+ $text);
  $html = '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + $text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
  
      alert("html is" + $html);
  $('div.list').append($html);
  alert("html appended to div " + $html);
  $('#todo').val("");
  alert("value cleared");

};

var main = function() {
  $('form').submit(function() {
      $text = $('#todo').val();
   // alert("This is text " + $text);
    template($text);
    $('.glyphicon-star').on('click',function() {
      $('.glyphicon-star').toggleClass('active');
      alert("class active toggled");
    });
    $('.glyphicon-remove').on('click',function() {
      $('.glyphicon-remove').toggleClass('active');
      alert("class active removed");
    });
   
                
     
    
    return false;  
  });
 
  
};

$(document).ready(main);