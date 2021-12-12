window.addEventListener("load", () => {
  console.log(document.getElementById("b"));
  document.getElementById("btn").addEventListener("click", handleBtnClick);
});

const handleBtnClick = () => {
  console.log("you clicked");
};
/*
function handleBtnClick(){
  console.log("you clicked");
}
*/

//the jquery way
$(document).ready(function () {
  console.log("document ready");
});

//the vanilla js way
window.addEventListener("load", () => {
  console.log("document ready");
});
