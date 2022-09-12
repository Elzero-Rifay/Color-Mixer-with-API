function chagneColor() {
  const resultInHexa = document.getElementById("resultInHexa");
  var RandomColor = Math.floor(Math.random() * 16777216).toString(16);
  document.body.style.backgroundColor = "#" + RandomColor;
  resultInHexa.innerHTML = "#" + RandomColor;
  console.log("#" + RandomColor);
  const red = document.getElementById("red");
  const green = document.getElementById("green");
  const blue = document.getElementById("blue");
  red.value = "#" + RandomColor;
  green.value = "#" + RandomColor;
  blue.value = "#" + RandomColor;

}




// function chagneColor() {
// const red = parseInt(document.getElementById("red").value);
// const green = parseInt(document.getElementById("green").value);
// const blue = parseInt(document.getElementById("blue").value);
// const colors = "#" + hex(red) + hex(green) + hex(blue);

//   function hex(v) {
//     var hex = v.toString(16);
//     if (v < 16) {
//       hex = "0" + hex;
//     }
//     return hex;
//   }
//   document.body.style.backgroundColor = colors;
//   document.getElementById("resultInHexa").innerHTML = colors;
//   console.log("Done!");
// }

// document.getElementById('red').addEventListener("onmousemove", chagneColor)
// document.getElementById('green').addEventListener("onmousemove", chagneColor())
// document.getElementById('blue').addEventListener("onmousemove", chagneColor())
