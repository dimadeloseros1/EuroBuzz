/* 
    This code fulfills the first requirement of the project

    First it checks for the numbers divisible by 3 and 5 without any remainder and displays Eurofins as text,
    Then it checks for numbers divisible by 5 without any remainder and displays Five as text,
    Next it checks for numbers divisible by 3 without any remainder and displays Three as text,
    The remaining numbers it converts to string and displays them as text,
    Last but not least we also return a class name inside the objects for each of the conditional statements aside from the last one
*/
export const displayText = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return { text: "Eurofins", className: "eurofins" };
    } else if (number % 5 === 0) {
        return { text: "Five", className: "five" };
    } else if (number % 3 === 0) {
        return { text: "Three", className: "three" };
    } else {
        return { text: number.toString() };
    }
}

// This function runs through the loop and pushes the *displayText* function inside an array and returns that array as value 
export const generatedNums = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(displayText(i));
    }
    return arr;
}