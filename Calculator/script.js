const display = document.getElementById("display");
let expression = "";

const updateDisplay = () => {
  display.textContent = expression || "0";
};

const calculate = () => {
  try {
    let result = eval(expression.replace("%", "/100"));
    expression = result.toString();
  } catch (error) {
    expression = "Error";
  }
  updateDisplay();
};

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "=") {
      calculate();
    } else if (value === "AC") {
      expression = "";
      updateDisplay();
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      updateDisplay();
    } else {
      expression += value;
      updateDisplay();
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowed = "0123456789+-*/%.";
  if (allowed.includes(e.key)) {
    expression += e.key;
    updateDisplay();
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    updateDisplay();
  } else if (e.key === "Escape") {
    expression = "";
    updateDisplay();
  }
});
