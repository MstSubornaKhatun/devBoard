let colors = ["green", "blue", "gray", "purple", "orange", "yellow", "pink"]; 
let index = 0;

document.getElementById("changeBgButton").addEventListener("click", function() {
    document.body.style.backgroundColor = colors[index]; 
    index = (index + 1) % colors.length; 
});