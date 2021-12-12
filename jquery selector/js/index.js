//select the beginning of the elements
//jquery
$(document).ready(function () {
  console.log("dom loaded");
});
//js
// window.addEventListener("load", () => {
//   console.log("dom loaded");
// });

//select by id
//jquery
$(document).ready(function () {
  $("#iddiv").click(function () {
    console.log("btn pressed");
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("#iddiv").addEventListener("click", () => {
//     console.log("btn pressed");
//   });
// });

//select by class
//jquery
$(document).ready(function () {
  $(".classdiv").click(function () {
    console.log("btn pressed");
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector(".classdiv").addEventListener("click", () => {
//     console.log("btn pressed");
//   });
// });

//select by name -> attr
//jquery
$(document).ready(function () {
  $("[name=namediv]").click(function () {
    console.log("btn pressed");
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("[name=namediv]").addEventListener("click", () => {
//     console.log("btn pressed");
//   });
// });

//select by myattr -> attr
//jquery
//start with myattr^=myattrdiv
//end with myattr$=myattrdiv
//contain with myattr*=myattrdiv
$(document).ready(function () {
  $("[myattr=myattrdiv]").click(function () {
    console.log("btn pressed");
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("[myattr=myattrdiv]").addEventListener("click", () => {
//     console.log("btn pressed");
//   });
// });

//select by tagname
//jquery
$(document).ready(function () {
  $("p").click(function () {
    console.log("btn pressed");
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("p").addEventListener("click", () => {
//     console.log("btn pressed");
//   });
// });
