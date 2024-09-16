const displayKeyValue = document.querySelector(".js-display");

//

// function resetDisplay() {
//   displayKeyValue.value = " ";
// }

function display(input) {
  if (input === "+" || input === "x" || input === "/" || input === ".") {
    if (
      displayKeyValue.value === "" ||
      "+*.x/".includes(displayKeyValue.value.slice(-1))
    ) {
      return;
    }
  }
  displayKeyValue.value += input;
}

function resetDisplay() {
  displayKeyValue.value = "";
}

function deletButton() {
  displayKeyValue.value = displayKeyValue.value.substring(
    0,
    displayKeyValue.value.length - 1
  ); //toString().slice(0, -1);
}

function calc() {
  // try {
  //   displayKeyValue.value = eval(displayKeyValue.value);
  // } catch (error) {
  //   displayKeyValue.value = "Error";
  // }

  try {
    displayKeyValue.value = displayKeyValue.value.replace(/x/g, "*");
    const result = eval(displayKeyValue.value);
    if (!isNaN(result)) {
      displayKeyValue.value = parseFloat(result.toFixed(2));
    } else {
      displayKeyValue.value = "Error";
    }
  } catch (error) {
    displayKeyValue.value = "Error";
  }
}
function dbl() {
  displayKeyValue.value = "Error";
}
