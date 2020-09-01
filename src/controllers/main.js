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
    localStorage.removeItem("nhs_user");
    window.location.replace("../../../index.html");
}


function getName() {
    return `${JSON.parse(localStorage.getItem("nhs_user")).full_name}`
}


redirectIfNoToken()



function refreshSelect(el) {
    let instance = M.FormSelect.getInstance(el)
    instance.destroy()
    el.classList.add('white-text')
    M.FormSelect.init(el)
    document.getElementsByClassName("select-dropdown dropdown-trigger")[0].classList.add("white-text")
}