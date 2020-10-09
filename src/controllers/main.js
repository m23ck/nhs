token = localStorage.getItem("token")
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

function setFullName() {
    document.getElementById("huidige_gebruiker_naam").innerHTML = JSON.parse(localStorage.getItem("nhs_user")).voornaam
    // document.getElementById("huidige_gebruiker_naam").style.fontSize = "15px"
    // document.getElementById("huidige_gebruiker_naam").style.color = "black"
}

redirectIfNoToken()

function refreshSelect(el) {
    let instance = M.FormSelect.getInstance(el)
    instance.destroy()
    el.classList.add('white-text')
    M.FormSelect.init(el)
    document.getElementsByClassName("select-dropdown dropdown-trigger")[0].classList.add("white-text")
}

const notificationsTrigger = document.getElementById('notifications-trigger')
const notifications = document.getElementById('notifications')
notificationsTrigger.addEventListener('click', () => {
    isActive = notifications.classList.contains('open')

    isActive ? notifications.classList.remove('open') : notifications.classList.add('open')
    console.log(isActive)
})