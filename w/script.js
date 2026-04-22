function verify() {
    let cookies = document.cookie.split("; ");
    let usernameCookie = cookies.find(cookie => cookie.startsWith("username="));

    // If cookie is not set, prompt for password
    if (!usernameCookie || usernameCookie.split("=")[1] !== "user") { 
        // Create password input element dynamically
        let passwordInput = document.createElement("input");
        passwordInput.type = "password";  // Make it a password field
        passwordInput.placeholder = "Enter password";
        passwordInput.style.position = "fixed";
        passwordInput.style.top = "50%";
        passwordInput.style.left = "50%";
        passwordInput.style.transform = "translate(-50%, -50%)";
        passwordInput.style.padding = "10px";
        passwordInput.style.fontSize = "16px";

        // Create a confirm button
        let confirmButton = document.createElement("button");
        confirmButton.innerText = "Submit";
        confirmButton.style.padding = "10px";
        confirmButton.style.marginTop = "10px";
        confirmButton.style.fontSize = "16px";

        // Add input and button to the body
        document.body.appendChild(passwordInput);
        document.body.appendChild(confirmButton);

        // Handle form submission (password check)
        confirmButton.onclick = function() {
            if (passwordInput.value !== "html5css3") { 
                window.location.replace("http://www.google.com/ncr");
            }
            else {
                document.cookie = "username=user; path=/; max-age=" + (60 * 60 * 24); // 1 day expiration
                document.body.removeChild(passwordInput);
                document.body.removeChild(confirmButton);
            }
        };
    }
}

verify();
