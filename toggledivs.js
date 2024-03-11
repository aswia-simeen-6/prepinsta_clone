/*function toggleVisibility(divId) {
    var allDivs = document.querySelectorAll('div');
    allDivs.forEach(function(div) {
        if (div.id === divId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
}

// By default, show div1
document.getElementById('div1').style.display = "block";*/

function toggleDiv(divId) {
    var div = document.getElementById(divId);
    
    // Check if the div is currently hidden
    var isHidden = div.style.display === "none";

    // Hide all divs except the one being toggled
    var allDivs = document.querySelectorAll('div[id^="div"]');
    allDivs.forEach(function(element) {
      if (element.id !== divId) {
        element.style.display = "none";
      }
    });

    // Toggle the display of the targeted div
    div.style.display = isHidden ? "block" : "none";
}