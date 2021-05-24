var x = 1;
var image = document.getElementById("image");
console.log(image)

document.getElementById("btn").addEventListener("click", function() {
    x += 1;
    if (x > 18) { x = 1; }
    image.src = "./images/" + "shuffle" + x + ".png";
    console.log(image);
});