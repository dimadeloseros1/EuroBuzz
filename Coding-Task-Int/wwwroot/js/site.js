const form = document.querySelector(".startFinish-form");
const resultDiv = document.querySelector(".numbers");
const numbersField = document.querySelector(".numbers-field");

// Event listener that listens for any change upon the button being pressed
form.addEventListener("submit", async function (event) {
    event.preventDefault(); // This code prevents the page being refreshed uppon the event listener being fired

    // The next two lines parse the value from each
    const start = parseInt(document.querySelector(".start").value);
    const end = parseInt(document.querySelector(".end").value);

    try {
        const fetchedNums = await fetchingNums(start, end)
        const numbers = await generatingNums(fetchedNums.start, fetchedNums.end); // Generate numbers
        displayingNums(numbers); // Displays numbers
        numbersField.classList.add("active");  // adding a classlist for css code whenever the button is being pressed
    } catch (error) {
        console.error("Error fetching numbers: ", error);
    }

});

// Function which fetches the numbers and stores them in the data base
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


// Function which generates the numbers
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
