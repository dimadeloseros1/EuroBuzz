import { generatedNums } from "./GeneratingNums.js"

const form = document.querySelector(".startFinish-form");
const resultDiv = document.querySelector(".numbers");
const numbersField = document.querySelector(".numbers-field");

const errorSpan = document.createElement("span");
errorSpan.className = "error-span";

// Event listener that listens for any change upon the button being pressed
form.addEventListener("submit", async (event) => {

    // This code prevents the page being refreshed uppon the event listener being fired
    event.preventDefault(); 

    // The next two lines convert 
    const start = parseInt(document.querySelector(".start").value);
    const end = parseInt(document.querySelector(".end").value);

    // This condition checks whether the start number is equal or greater than end number
    if (start >= end) {
        errorSpan.textContent = "Start number cannot be the same or greater than End number";
        form.prepend(errorSpan);
        return; 
    } else {
        errorSpan.textContent = ""; 
    }

    // in this try catch block we orchestrate all the functions that we've created in this file and run them accordingly 
    try {
        const fetchedNums = await fetchingNums(start, end)

        // Function exported from GeneratingNums file that takes care of generating numbers
        const numbers = await generatedNums(fetchedNums.start, fetchedNums.end); 

        // Displays numbers
        displayingNums(numbers); 

        // adding a class that is activated when the event is fired successfully 
        numbersField.classList.add("active");  
    } catch (error) {
        console.error("Error fetching numbers: ", error);
    }

});

// This function is in charge of sending data to the sever
const fetchingNums = async (start, end) => {
    const response = await fetch("/Home/AddNumbers", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ Start: start, End: end })
    });

    if (!response.ok) {
        throw new Error("Response was not ok " + response.status);
    }

    return await response.json();
}




// Function which displays the numbers by creating DOM elements
const displayingNums = (nums) => {
    let ul = document.createElement("ul");
    nums.forEach(numsObj => {
        let li = document.createElement("li");
        li.textContent = numsObj.text;
        li.className = numsObj.className;
        ul.appendChild(li);
    })
    resultDiv.innerHTML = "";
    resultDiv.appendChild(ul);
}
