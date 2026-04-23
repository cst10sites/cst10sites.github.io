document.addEventListener("DOMContentLoaded", function () {

    function verify() {
        let cookies = document.cookie.split("; ");
        let usernameCookie = cookies.find(c => c.startsWith("username="));
        let isLoggedIn = usernameCookie && usernameCookie.split("=")[1] == "cst10";

        if (isLoggedIn) return;

        // --- CREATE BLACK OVERLAY ---
        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "darkgrey";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "999999";

        // --- LOGIN BOX ---
        let box = document.createElement("div");
        box.style.textAlign = "center";

        let passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.placeholder = "Enter password";
        passwordInput.style.padding = "10px";
        passwordInput.style.fontSize = "16px";
        passwordInput.style.display = "block";
        passwordInput.style.marginBottom = "10px";

        let confirmButton = document.createElement("button");
        confirmButton.innerText = "Submit";
        confirmButton.style.padding = "10px";
        confirmButton.style.fontSize = "16px";

        box.appendChild(passwordInput);
        box.appendChild(confirmButton);
        overlay.appendChild(box);
        document.body.appendChild(overlay);

        // --- LOGIN CHECK ---

        function checkPassword() {
            if (passwordInput.value !== "html5css3") {
                alert("Incorrect Password")
                window.location.replace("http://www.google.com/ncr");
                return;
            } else {
                document.cookie = "username=cst10; path=/; max-age=" + (60 * 60 * 24);
                overlay.remove();
            }
        }

        confirmButton.onclick = checkPassword;

        passwordInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                checkPassword();
            }
        });

    }
   verify();
});
