// Toggle show / hide password
const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const targetId = button.getAttribute("data-target");
        const input = document.getElementById(targetId);

        if (input.type === "password") {
            input.type = "text";
            button.textContent = "Hide";
        } else {
            input.type = "password";
            button.textContent = "Show";
        }
    });
});


// UI only login form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email === "" || password === "") {
            alert("Email dan password wajib diisi!");
            return;
        }

        alert("Login UI berhasil. Backend akan dibuat setelah ini.");
    });
}


// UI only signup form
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const phone = document.getElementById("signupPhone").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (name === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
            alert("Semua field wajib diisi!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password dan konfirmasi password tidak sama!");
            return;
        }

        alert("Sign Up UI berhasil. Backend akan dibuat setelah ini.");
    });
}