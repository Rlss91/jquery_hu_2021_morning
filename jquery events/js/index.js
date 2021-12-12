//event that happends when page loaded
//jquery
$(document).ready(function () {
  console.log("on page loaded");
});
//js
// window.addEventListener("load", () => {
//   console.log("on page loaded");
// });

//event that will happend when user click on the element
//jquery
$(document).ready(function () {
  $("#iddiv").click(function () {
    console.log("user clicked");
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("#iddiv").addEventListener("click", ()=>{
//     console.log("user clicked");
//   })
// });

//event that will happend when user double click on the element
/*
  change
  submit
  scroll
  keypress
*/
//jquery
$(document).ready(function () {
  $(".classdiv").dblclick(function () {
    console.log("user double clicked");
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("#iddiv").addEventListener("dblclick", ()=>{
//     console.log("user double clicked");
//   })
// });

//jquery addEventListener like
//jquery
$(document).ready(function () {
  $("#txt").on("blur", function (event) {
    console.log("event", event);
    console.log("value", event.target.value);
    console.log("blur event happend");
    const l = event.target.value.length;
    if (l >= 5 && l <= 10) {
      console.log("good job");
    } else {
      console.error("error");
    }
  });
});
$(document).ready(function () {
  $("#txt").on("keydown", function (event) {
    console.log("event", event);
    console.log("value", event.target.value);
    console.log("keydown event happend");
    const l = event.target.value.length;
    if (l >= 5 && l <= 10) {
      console.log("good job");
    } else {
      console.error("error");
    }
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("#txt").addEventListener("keydown", (event) => {
//     console.log("event", event);
//     console.log("value", event.target.value);
//     console.log("keydown event happend");
//     const l = event.target.value.length;
//     if (l >= 5 && l <= 10) {
//       console.log("good job");
//     } else {
//       console.error("error");
//     }
//   });
// });
