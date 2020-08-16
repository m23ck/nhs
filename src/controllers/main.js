token = localStorage.getItem("token");
gebruiker_type = localStorage.getItem("gebruiker_type");
function redirectIfNoToken() {
    if (token == null) {
        window.location.replace("../../index.html");
        alert("U Moet Eerst Inloggen!");
    }
}

function logout() {
    localStorage.removeItem("token");
    window.location.replace("../../index.html");
}