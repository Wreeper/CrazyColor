// CrazyColor made by https://wreeper.top/
// Requires jQuery: https://jquery.com/
// Use value from variable "colorc" !
function generateCode(length, possible) {
var colorcode = "";
for (var i = 0; i < 6; i++)
colorcode += possible.charAt(Math.floor(Math.random() * possible.length));
return colorcode;
}
const delay = 1;
setTimeout(randomcolor, 0);

function randomcolor() {
colorc = generateCode(6, "abcdef0123456789");
setTimeout(randomcolor, delay);
}
