// Function for the Search button
function search() {
    alert("Searching..."); // Placeholder for actual search function
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

    