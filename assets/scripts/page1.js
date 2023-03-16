// Select the login and registration forms
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Add event listeners to the forms to handle form submissions
loginForm.addEventListener("submit", handleLoginFormSubmit);
registerForm.addEventListener("submit", handleRegisterFormSubmit);

// Handle login form submission
function handleLoginFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Make an HTTP request to the server
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Login failed");
    }
    // Redirect to the dashboard page on successful login
    window.location.href = "/dashboard";
  })
  .catch(error => {
    console.error(error);
    alert("Не удалось зайти");
  });
}


function handleRegisterFormSubmit(event) {
  event.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("password-confirm").value;


  if (password !== confirmPassword) {
    alert("Первый пароль не счиает второго пароля своим корешом");
    return;
  }


  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Registration failed");
    }
   
    window.location.href = "/main.html";
  })
  .catch(error => {
    console.error(error);
    alert("Registration failed");
  });
}
