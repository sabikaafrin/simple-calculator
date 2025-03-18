function calculate(operator) {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let result;

  // if (operator === "+") {
  //   result = a + b;
  // } else if (operator === "-") {
  //   result = a - b;
  // } else if (operator === "*") {
  //   result = a * b;
  // } else if (operator === "/") {
  //   result = a / b;
  // } else {
  //   result = "Invalid operator";
  // }

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "Invalid operator";
  }
  document.getElementById("result").value = result;
}
