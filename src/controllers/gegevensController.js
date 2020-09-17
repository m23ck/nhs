
const getUserInfo =
    ({ naam, voornaam, email, telefoon, adres }) => {
        return { naam, voornaam, email, telefoon, adres }
    }

const user_info = getUserInfo(JSON.parse(localStorage.nhs_user))
const form = document.getElementById("gegevensForm")
const inputs = form.querySelectorAll("input")

for (let input of inputs) {
    input.value = user_info[input.id]
    input.addEventListener("keyup", checkFormChange)
}



function checkFormChange() {
    for (let input of inputs) {
        if (user_info[input.id] != input.value) {
            document.getElementById("submit").removeAttribute("disabled")
            break
        } else {
            document.getElementById("submit").setAttribute("disabled", true)
        }
    }
}

