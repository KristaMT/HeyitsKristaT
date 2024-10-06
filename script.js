const dataContainer = document.getElementById("dataContainer");

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Create HTML elements based on the data
        let output = "<p>Name: " + data.name + "</p>";
        output += "<p>Age: " + data.age + "</p>";
        output += "<p>City: " + data.city + "</p>";

        // Update the container with the generated HTML
        dataContainer.innerHTML = output;
    })
    .catch(error => console.error('Error fetching data:', error));