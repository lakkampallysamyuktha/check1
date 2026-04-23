console.log("JS CONNECTED ✅");

// SIGNUP
// ================= SIGNUP =================
function signup() {

  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let password = document.getElementById("signupPassword").value.trim();
  let role = document.getElementById("signupRole").value;

  if (!name || !email || !password || !role) {
    alert("Fill all fields ❌");
    return;
  }

  let user = { name, email, password, role };

  localStorage.setItem("user_" + email, JSON.stringify(user));

  alert("Signup successful ✅");

  window.location.assign("login.html");
}


// ================= LOGIN =================
function login() {

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Fill all fields ❌");
    return;
  }

  let storedUser = localStorage.getItem("user_" + email);

  if (!storedUser) {
    alert("User not found ❌");
    return;
  }

  let user = JSON.parse(storedUser);

  if (user.password !== password) {
    alert("Wrong password ❌");
    return;
  }

  alert("Login successful ✅");

  if (user.role === "admin") {
    window.location.assign("admin.html");
  } else {
    window.location.assign("dashboard.html");
  }
}

// LOGIN
function login() {

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let storedUser = localStorage.getItem("user_" + email);

  if (!storedUser) {
    alert("User not found");
    return;
  }

  let user = JSON.parse(storedUser);

  if (user.password !== password) {
    alert("Wrong password");
    return;
  }

  alert("Login success");

  console.log("Redirecting...");

  if (user.role === "admin") {
    window.location.assign("admin.html");
  } else {
    window.location.assign("dashboard.html");
  }
}


// LOGOUT
function logout() {
  localStorage.removeItem("loggedUser");

  // redirect to error page
  window.location.href = "error.html";
}


// PROTECT PAGES
document.addEventListener("DOMContentLoaded", function () {

  let user = localStorage.getItem("loggedUser");

  if (!user && (window.location.pathname.includes("admin.html") || window.location.pathname.includes("dashboard.html"))) {
    window.location.href = "login.html";
  }

});
  // hamburger toggle
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

});
