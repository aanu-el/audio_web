// Explore Interest Section
function openTab(evt, tabNumber) {
  // Declare all Variables
  var i, tabcontent;

  // Get all elements with class="explore-tab-content" and hide them
  tabcontent = document.getElementsByClassName("explore-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabNumber).style.display = "flex";
}

document.getElementById("gospel-btn").click();
