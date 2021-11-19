function myFunction() {
  var x = document.getElementById("header");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

function openTabMenu(evt, menuName) {
  var x = document.getElementById("header");

  if (x.className !== "header") {
    x.className = "header";
  }

  var i, x, tablinks;
  x = document.getElementsByClassName("menuItem");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" menu-active", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " menu-active";
}

function openTabMenu2() {
  var x, tablinks;
  x = document.getElementsByClassName("menuItem");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("menu-active", "");
  }
  document.getElementById("home").style.display = "block";
  var x = document.getElementById("home-page");
  x.classList.add("menu-active");
}
