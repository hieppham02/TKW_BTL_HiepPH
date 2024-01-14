function OpenLeague(leagueName) {
  var i;
  var x = document.getElementsByClassName("league-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(leagueName).style.display = "table";
}
function OpenPlayer(leaguePlayer) {
  var i;
  var x = document.getElementsByClassName("league-player");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(leaguePlayer).style.display = "table";
}
function OpenDescription(leagueDes) {
  var i;
  var x = document.getElementsByClassName("league-des");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(leagueDes).style.display = "block";
}
function ClickChangeColor_1() {
  document.getElementById("btn-l1").style.color = "#00cc47";
  document.getElementById("btn-l2").style.color = "black";
  document.getElementById("btn-l3").style.color = "black";
}
function ClickChangeColor_2() {
  document.getElementById("btn-l1").style.color = "black";
  document.getElementById("btn-l2").style.color = "#00cc47";
  document.getElementById("btn-l3").style.color = "black";
}
function ClickChangeColor_3() {
  document.getElementById("btn-l1").style.color = "black";
  document.getElementById("btn-l2").style.color = "black";
  document.getElementById("btn-l3").style.color = "#00cc47";
}
document.addEventListener("DOMContentLoaded", function () {
  // Trích xuất mảng HTML từ localStorage
  var storedHtmlArray =
    JSON.parse(localStorage.getItem("teamObjectArray")) || [];

  // Hiển thị HTML trong thẻ insert-html
  if (storedHtmlArray.length > 0) {
    var htmlToShow = storedHtmlArray.map((item) => item.html).join("");
    document.getElementById("insert-html").innerHTML = htmlToShow;
  }
});
