// 1. Registrera ny användare
const registerForm = document.getElementById("register-form");
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("reg-username").value;
        const password = document.getElementById("reg-password").value;
        const errorEl = document.getElementById("error-message");
        const successEl = document.getElementById("success-message");

        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            successEl.textContent = "Konto skapat!";
            errorEl.textContent = "";
        } else {
            errorEl.textContent = data.error;
            successEl.textContent = "";
        }
    });
}

// 2. Logga in
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const errorEl = document.getElementById("error-message");
        const successEl = document.getElementById("success-message");

        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Spara token i sessionStorage
            sessionStorage.setItem("token", data.token);
            window.location.href = "secret.html";
        } else {
            errorEl.textContent = data.error;
            successEl.textContent = "";
        }
    });
}

// 3. Hämta skyddad data på secret.html
const usersList = document.getElementById("users-list");
if (usersList) {
    const token = sessionStorage.getItem("token");

    async function getProtected() {
        const response = await fetch("http://localhost:3000/api/protected", {
            headers: { "Authorization": "Bearer " + token }
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("welcome-msg").textContent = data.message;
            
            // Fyll tabellen enkelt
            usersList.innerHTML = "";
            data.allRegisteredUsers.forEach(user => {
                usersList.innerHTML += `<tr><td>${user.id}</td><td>${user.username}</td></tr>`;
            });
        } else {
            document.getElementById("error-message").textContent = "Åtkomst nekad, logga in igen.";
        }
    }

    getProtected();
}

// 4. Utloggning
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        sessionStorage.removeItem("token");
        window.location.href = "index.html";
    });
}