console.log("JS CONNECTED ✅");

// LOGIN
function login() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;
  let role = document.getElementById("loginRole").value;

  if (email === "" || pass === "" || role === "") {
    alert("Please fill all fields!");
  } else {
    alert("Login Successful as " + role);
  }
}

// SIGNUP
function signup() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if (email === "" || pass === "" || role === "") {
    alert("Please fill all fields!");
  } else {
    alert("Signup Successful as " + role);
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
