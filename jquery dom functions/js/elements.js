$(document).ready(function () {
  //create new element and insert it into element at the end
  $("#appendDiv").append('<span class="bigdiv">append 1</span>');
  $("#appendDiv").append('<span class="bigdiv">append 2</span>');
  $("#appendDiv").append('<span class="bigdiv">append 3</span>');
  //create new element and insert it into element at the beginning
  $("#prependDiv").prepend('<span class="bigdiv">prepend 1</span>');
  $("#prependDiv").prepend('<span class="bigdiv">prepend 2</span>');
  $("#prependDiv").prepend('<span class="bigdiv">prepend 3</span>');
  //create new element and insert it as bro element at the end
  $("#afterDiv").after('<div class="bigdiv">after 1</div>');
  $("#afterDiv").after('<div class="bigdiv">after 2</div>');
  $("#afterDiv").after('<div class="bigdiv">after 3</div>');
  //create new element and insert it as bro element at the beginning
  $("#beforeDiv").before('<div class="bigdiv">before 1</div>');
  $("#beforeDiv").before('<div class="bigdiv">before 2</div>');
  $("#beforeDiv").before('<div class="bigdiv">before 3</div>');
  //remove element when clicked
  $("span").click(function (event) {
    console.log(event);
    event.target.remove();
  });
  $("#prependDiv").click(function () {
    $("#prependDiv").empty();
  });
});
