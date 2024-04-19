const display = document.getElementById("display");

function insertToDisplay(input) {
  // display.value = display.value + input;
  display.value += input;
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error!"
  }
}
function clearDisplay() {
  display.value = "";
}
