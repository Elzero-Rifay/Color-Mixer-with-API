function chagneColor() {
  const resultInHexa = document.getElementById("resultInHexa");
  var RandomColor = Math.floor(Math.random() * 16777216).toString(16);
  document.body.style.backgroundColor = "#" + RandomColor;
  resultInHexa.innerHTML = "#" + RandomColor;
  console.log("#" + RandomColor);

  }

  


function moveColors() {
const red = parseInt(document.getElementById("red").value);
const green = parseInt(document.getElementById("green").value);
const blue = parseInt(document.getElementById("blue").value);
const colors = "#" + hex(red) + hex(green) + hex(blue);


  function hex(v) {
    var hex = v.toString(16);
    if (v < 16) {
      hex = "0" + hex;
    }
    return hex;
  }

   document.body.style.backgroundColor = colors;
     resultInHexa.innerHTML = colors;

    }


// document.getElementById('red').addEventListener("mousemove", chagneMove)
// document.getElementById('green').addEventListener("mousemove", chagneMove )
// document.getElementById('blue').addEventListener("mousemove", chagneMove)
