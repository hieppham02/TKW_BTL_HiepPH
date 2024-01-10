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
function ClickChangeColor_1() {
  document.getElementById("btn-l1").style.color = "#00cc47";
  document.getElementById("btn-l2").style.color = "white";
  document.getElementById("btn-l3").style.color = "white";
}
function ClickChangeColor_2() {
  document.getElementById("btn-l1").style.color = "white";
  document.getElementById("btn-l2").style.color = "#00cc47";
  document.getElementById("btn-l3").style.color = "white";
}
function ClickChangeColor_3() {
  document.getElementById("btn-l1").style.color = "white";
  document.getElementById("btn-l2").style.color = "white";
  document.getElementById("btn-l3").style.color = "#00cc47";
}
