console.log("JS CONNECTED ✅");

// SIGNUP
function signup() {

  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let password = document.getElementById("signupPassword").value.trim();
  let role = document.getElementById("signupRole").value;

  if (!name || !email || !password || !role) {
    alert("Please fill all fields ❌");
    return;
  }

  let user = {
    name,
    email,
    password,
    role
  };

  localStorage.setItem("user_" + email, JSON.stringify(user));

  alert("Signup successful ✅");

  window.location.href = "login.html";
}


// LOGIN
function login() {

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please fill all fields ❌");
    return;
  }

  let storedUser = localStorage.getItem("user_" + email);

  if (!storedUser) {
    alert("User not found ❌ Please signup first");
    return;
  }

  let user = JSON.parse(storedUser);

  if (user.password !== password) {
    alert("Wrong password ❌");
    return;
  }

  localStorage.setItem("loggedUser", email);

  alert("Login successful ✅");

  // REDIRECT BASED ON ROLE
  if (user.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
}


// LOGOUT
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}


// PROTECT PAGES
document.addEventListener("DOMContentLoaded", function () {

  let user = localStorage.getItem("loggedUser");

  if (!user && (window.location.pathname.includes("admin.html") || window.location.pathname.includes("dashboard.html"))) {
    window.location.href = "login.html";
  }

});
