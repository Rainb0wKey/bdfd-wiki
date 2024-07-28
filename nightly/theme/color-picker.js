let colorButton = document.getElementById("primary_color");
let colorDiv = document.getElementById("color_val");

colorButton.oninput = function() {
    colorDiv.innerHTML = colorButton.value;
    colorDiv.style.color = colorButton.value;
}
