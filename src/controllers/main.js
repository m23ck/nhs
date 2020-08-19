token = localStorage.getItem("token");
gebruiker_type = localStorage.getItem("gebruiker_type");

function redirectIfNoToken() {
    if (token == null) {
        window.location.replace("../../../index.html");
        alert("U Moet Eerst Inloggen!");
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("gebruiker_id");
    localStorage.removeItem("gebruiker_type");
    window.location.replace("../../../index.html");
}
redirectIfNoToken()