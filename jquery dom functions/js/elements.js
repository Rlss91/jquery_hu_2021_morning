$(document).ready(function () {
  $("#appendDiv").append('<span class="bigdiv">append 1</span>');
  $("#appendDiv").append('<span class="bigdiv">append 2</span>');
  $("#appendDiv").append('<span class="bigdiv">append 3</span>');
  $("#prependDiv").prepend('<span class="bigdiv">prepend 1</span>');
  $("#prependDiv").prepend('<span class="bigdiv">prepend 2</span>');
  $("#prependDiv").prepend('<span class="bigdiv">prepend 3</span>');
  $("#afterDiv").after('<div class="bigdiv">after 1</div>');
  $("#afterDiv").after('<div class="bigdiv">after 2</div>');
  $("#afterDiv").after('<div class="bigdiv">after 3</div>');
  $("#beforeDiv").before('<div class="bigdiv">before 1</div>');
  //   $("#beforeDiv").before('<div class="bigdiv">before 2</div>');
  //   $("#beforeDiv").before('<div class="bigdiv">before 3</div>');
});
