function toggleLogin() {
    document.getElementById('loginModal').classList.toggle('hidden');
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        toggleLogin();
    } else {
        alert('Invalid username or password.');
    }
}

function bookTickets() {
    const name = document.getElementById('name').value;
    const tickets = document.getElementById('tickets').value;

    if (name && tickets) {
        const confirmationText = document.getElementById('confirmationText');
        confirmationText.innerText = `Thank you, ${name}! Your booking for ${tickets} ticket(s) is confirmed.`;
        document.getElementById('confirmation').classList.remove('hidden');
    } else {
        alert('Please fill out all required fields.');
    }
}
// Open the popup form with the correct concert name
function openForm(concertName) {
    document.getElementById("popupForm").style.display = "flex";
    document.getElementById("concertName").innerText = concertName;
}

// Close the popup form
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration successful!");
    closeForm();
});

function toggleContent(contentId) {
    const content = document.getElementById(contentId);
  
    // Toggle the "show" class for the transition effect
    if (content.classList.contains('show')) {
      content.classList.remove('show');
    } else {
      content.classList.add('show');
    }
  }
  

