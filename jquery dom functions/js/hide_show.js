$(document).ready(function () {
  $("#navbarDropdown").click(function () {
    // $("#dd-m").show();
    //first parameter is speed in ms or slow or fast
    //sec param is cb function that will happends when the animation is done
    //this will work for hide, show and toggle
    $("#dd-m").toggle(1000, function () {
      console.log("animation done");
    });
  });
  $("#navbarDropdown").blur(function () {
    console.log("blur");
    $("#dd-m").hide();
  });
  $("#nv-togler")
    .click(function () {
      console.log("click");
      $("#navbarSupportedContent").toggle();
    })
    .blur(function () {
      $("#navbarSupportedContent").hide();
    });
});
