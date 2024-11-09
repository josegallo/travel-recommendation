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
        const query = document.getElementById('search-inputs-input').value;
    
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
        } else if (query.includes('temple')) {
          results = data.temples;
        } else if (query.includes('countr')) {
          results = data.countries.flatMap(country => country.cities);
        } else {
          resultsContainer.innerHTML = '<p>No matching results found. Try "beach," "temple," or "country".</p>';
          return;
        }

        // Generate HTML for each result and insert into results container
        results.forEach(item => {
          const itemContainer = document.createElement('div');
          itemContainer.classList.add('result-item');

          // Image element
          const img = document.createElement('img');
          img.src = item.imageUrl;
          img.alt = item.name;

          // Name (h2) element
          const name = document.createElement('h2');
          name.textContent = item.name;

          // Description (p) element
          const description = document.createElement('p');
          description.textContent = item.description;

          // Visit button
          const button = document.createElement('button');
          button.textContent = 'Visit';
          button.onclick = () => window.location.href = '#';

          // Append elements to item container
          itemContainer.appendChild(img);
          itemContainer.appendChild(name);
          itemContainer.appendChild(description);
          itemContainer.appendChild(button);

          // Append item container to results container
          resultsContainer.appendChild(itemContainer);
        });
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  }
// Function for the Clear button
function reset() {
    document.querySelector('.search-bar input').value = '';
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

    