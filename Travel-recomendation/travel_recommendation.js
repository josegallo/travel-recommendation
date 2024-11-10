// Function for the Search button
function search_old() {
    // alert("Searching..."); // Placeholder for actual search function
    fetch('./travel_recommendation_api.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching the data:', error);
    });

}

function search() {
    // Get the search input value
        // Get the value from the input field
        const query = document.getElementById('search-inputs-input').value.toLowerCase();
    
        // Log the query to the console to verify it's working
        console.log("Search query:", query);
        
        // Add further logic here for processing the query if needed
        // (e.g., fetching data, filtering results, etc.)

    const resultsContainer = document.getElementById('search-results');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Fetch data from the JSON file
    fetch('./travel_recommendation_api.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        let results = [];

        // Check the query for specific keywords and set results accordingly
        if (query.includes('beach')) {
          results = data.beaches;
          displayResults(results,resultsContainer);
        } else if (query.includes('temple')) {
          results = data.temples;
          displayResults(results,resultsContainer);
        } else if (query.includes('country')) {
          results = data.countries.flatMap(country => country.cities);
          displayResults(results,resultsContainer);
        } else {
          resultsContainer.innerHTML = '<p>No matching results found. Try "beach," "temple," or "country".</p>';
          document.getElementById('search-results').style.display = 'block';
          return;
        }


      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  }

//display elments of research. Generate HTML for each result and insert into results container
  function displayResults(results, container) {
    results.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('result-item');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const button = document.createElement('button');
        button.textContent = 'Visit';
        button.onclick = () => window.location.href = '#';

        itemContainer.appendChild(img);
        itemContainer.appendChild(name);
        itemContainer.appendChild(description);
        itemContainer.appendChild(button);

        container.appendChild(itemContainer);
    });

    container.style.display = 'block';
}

// Function for the Clear button
function reset() {
    document.querySelector('.search-bar input').value = '';
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('search-results').style.display = 'none';
}

// Function for alert when submiting Contact Form 
    function submitForm() {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
            // Check if all fields are filled
        if (name && email && message) {
             alert("Thank you " + name + ", for your message. We will respond to you soon.\nKind Regards\nBa Da Boom Team");

            return true; // Allow form submission
        } else {
            alert("Please fill in all fields.");
            return false; // Prevent form submission
        }
    }

    