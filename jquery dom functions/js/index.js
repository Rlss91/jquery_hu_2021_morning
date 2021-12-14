//get text from dom
//jquery
//get the text (only the text) from the element
$(document).ready(function () {
  console.log($("#mainDiv").text());
});
//js
// window.addEventListener("load", () => {
//   console.log(document.querySelector("#mainDiv").innerText);
// });
//set text to element
//jquery
$(document).ready(function () {
  $("#setTxtDiv").text('$("#mainDiv").text()');
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("#setTxtDiv").innerText = 'document.querySelector("#mainDiv").innerText';
// });
//get html from dom
//jquery
$(document).ready(function () {
  console.log($("#mainDiv").html());
});
//js
// window.addEventListener("load", () => {
//   console.log(document.querySelector("#mainDiv").innerHTML);
// });
//set html to dom
//jquery
$(document).ready(function () {
  $("#outpMainDiv").html($("#mainDiv").html());
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("#outpMainDiv").innerHTML = document.querySelector("#mainDiv").innerHTML;
// });
//get data from input
//jquery
$(document).ready(function () {
  $("#txtInput").on("keyup", function (event) {
    console.log(event);
    if (event.originalEvent.keyCode == 13) {
      console.log($("#txtInput").val());
    }
  });
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("#txtInput").addEventListener("keyup", (event) => {
//     console.log(event);
//     if (event.keyCode == 13) {
//       console.log(document.querySelector("#txtInput").value);
//     }
//   });
// });
//set data to input
//jquery
$(document).ready(function () {
  $("#txtInput").val("sdifjuhg980345nioug");
});
//js
// window.addEventListener("load", () => {
//   document.querySelector("#txtInput").value = "sdifjuhg980345nioug";
// });
//get attr from element
//jquery
$(document).ready(function () {
  console.log("type attr", $("#txtInput").attr("type"));
});
//set attr to element
$(document).ready(function () {
  $("#txtInput").attr("type", "radio");
});
//set mult attr to element
$(document).ready(function () {
  $("#txtInput").attr({
    type: "text",
    value: "asdfsadfsadfsadf",
    newAttr: "asdfasdf",
  });
});
//add new element to element at the end
$(document).ready(function () {
  let div = $("#divToAdd");
  div.append("simple text<br>");
  div.append("<h3>h3 text</h3>");
});
