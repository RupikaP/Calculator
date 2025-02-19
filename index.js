const display = document.getElementById('display');
 // Function to append input to the display
 function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay(type) {
    const display = document.getElementById('display');
    if (type === 'AC') {
        display.value = ''; // Clear all
    } else if (type === 'C') {
        display.value = display.value.slice(0, -1); // Clear last character
    }
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;
        // Handle percentage calculation
        expression = expression.replace(/%/g, '/100');
        display.value = eval(expression); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Handle invalid expressions
    }
}
// Function to calculate the square of the current number
function calculateSquare() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
        display.value = currentValue * currentValue; // Calculate square
    } else {
        display.value = 'Error'; // Handle invalid input
    }
}
