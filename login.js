/* ================= LOGIN ================= */

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {

        alert("Please enter your email and password.");

        return;
    }

    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;
    }

    alert("Login successful! Welcome to VOLTIX.");

});


/* ================= SHOW / HIDE PASSWORD ================= */

const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        showPassword.textContent = "◉";

    } else {

        passwordInput.type = "password";

        showPassword.textContent = "◉";

    }

});


document.querySelectorAll(".social-btn").forEach(button => {

    button.addEventListener("click", function () {

        alert("Social login will be connected with the backend later.");

    });

});

// Google & Facebook login ke Firebase code ko
// HTML mein <script type="module"> ke andar rakhna hoga.

// Agar tum normal login.js use kar rahe ho,
// to pehle Email/Password ka code yahan rakh sakte ho:

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    // Firebase Email Login yahan connect hoga
});