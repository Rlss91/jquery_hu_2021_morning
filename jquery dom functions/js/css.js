$(document).ready(function () {
  $("#targetDiv").addClass("bigdiv");
  $("#targetDiv").addClass("anotherClass");
  $("#targetDiv").click(function () {
    $("#targetDiv").removeClass("anotherClass");
  });
  $("#targetDiv2").click(function () {
    $("#targetDiv2").toggleClass("anotherClass");
    $("#targetDiv2").css("background-color", "transparent");
    console.log($("#targetDiv2").css("background-color"));
    $("#div1").fadeIn(1000);
    $("#div2").fadeIn(2000, function () {
      $("#div2").fadeOut(1000);
      $("#div1").fadeOut(2000);
    });
  });
  $("#div3").fadeToggle(1000, function () {
    $("#div3").fadeToggle(1000);
  });
  $("#div4").fadeTo(1000, 0.5);
});
