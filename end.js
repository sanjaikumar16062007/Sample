// Get form
const form = document.forms["myForm"];

form.addEventListener("submit", function(e) {

    let name = form["name"].value;
    let email = form["email"].value;
    let password = form["password"].value;

    // Empty check
    if (name === "" || email === "" || password === "") {
        alert("All fields are required!");
        e.preventDefault();
        return;
    }

    // Email validation
    if (!email.includes("@")) {
        alert("Invalid email!");
        e.preventDefault();
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});