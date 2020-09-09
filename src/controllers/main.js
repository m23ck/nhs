token = localStorage.getItem("token")
gebruiker_type_id = JSON.parse(localStorage.getItem("nhs_user")).gebruiker_type_id

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("gebruiker_id");
    // localStorage.removeItem("gebruiker_type_id");
    localStorage.removeItem("nhs_user");
    window.location.replace("../../../index.html");
}


function getName() {
    return `${JSON.parse(localStorage.getItem("nhs_user")).full_name}`
}

function refreshSelect(el) {
    let instance = M.FormSelect.getInstance(el)
    instance.destroy()
    el.classList.add('black-text')
    M.FormSelect.init(el)
    document.getElementsByClassName("select-dropdown dropdown-trigger")[0].classList.add("white-text")
}


window.addEventListener('DOMContentLoaded', () => {
    for (const element of document.getElementsByTagName("label")) {
        element.classList.add("active")
    };
})