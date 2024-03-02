// Define a helper function to calculate the square of a number
function calculateSquare(number) {
    return number * number;
}

// Main function to demonstrate the usage of the helper function
function main() {
    // Get user input
    var userInput = prompt("Enter a number:");

    // Convert the user input to a number
    var number = parseFloat(userInput);

    // Check if the input is a valid number
    if (!isNaN(number)) {
        // Calculate the square using the helper function
        var square = calculateSquare(number);
        console.log("The square of", number, "is", square);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}

// Call the main function to start the program
main();

