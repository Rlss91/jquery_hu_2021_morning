$(document).ready(function () {
  $("#navbarDropdown").click(function () {
    $("#dd-m").show();
  });
  $("#navbarDropdown").blur(function () {
    console.log("blur");
    $("#dd-m").hide();
  });
});
