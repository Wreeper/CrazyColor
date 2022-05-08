// CrazyColor made by https://wreeper.top/ 2019-2022
// Requires jQuery, which can be downloaded by here: https://jquery.com/
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
