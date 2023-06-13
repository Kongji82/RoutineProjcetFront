function login() {
  const email = document.querySelector("input[name=email]").value;
  const password = document.querySelector("input[name=password]").value;
  console.log(email, password);

  // Make a request to the API server to login the user
  fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Login successful");
        return response.json();
      } else {
        alert("Login failed");
        throw new Error("Login failed");
      }
    })
    .then((data) => {
      console.log(data);
      // Redirect the user to the dashboard page
      console.log("Login successful");
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
    });
}

// Add an event listener to the login button
document.querySelector("button[type=button]").addEventListener("click", login);
