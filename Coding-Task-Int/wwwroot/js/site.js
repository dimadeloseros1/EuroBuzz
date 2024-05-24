const form = document.querySelector(".startFinish-form");
const resultDiv = document.querySelector(".numbers");

// Event listener that listens for any change uppon the button being pressed
form.addEventListener("submit", function (event) {
    event.preventDefault(); // This code prevents the page being refreshed uppon the event listener firing

    const start = parseInt(document.querySelector(".start").value);
    const end = parseInt(document.querySelector(".end").value);

    const numbers = generatingNums(start, end); // Generate numbers
    displayingNums(numbers); // Display numbers
});

// Function to generate the numbers
const generatingNums = (start, end) => {
    let ul = document.createElement("ul");

    for (let i = start; i <= end; i++) {
        let span = document.createElement("span");
        let li = document.createElement("li");

        if (i % 3 === 0 && i % 5 === 0) {
            span.textContent = "Eurofins";
            span.className = "eurofins";
        } else if (i % 3 === 0) {
            span.textContent = "Three";
            span.className = "three";
        } else if (i % 5 === 0) {
            span.textContent = "Five";
            span.className = "five";
        } else {
            span.textContent = i;
        }

        li.appendChild(span);
        ul.appendChild(li);
    }

    return ul;
}

// Function to display the numbers
const displayingNums = (ul) => {
    resultDiv.innerHTML = "";
    resultDiv.appendChild(ul); 
}