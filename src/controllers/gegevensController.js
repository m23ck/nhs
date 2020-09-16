
const getUserInfo =
    ({ naam, voornaam, email, telefoon, adres }) => {
        return [naam, voornaam, email, telefoon, adres]
    }

const user_info = getUserInfo(JSON.parse(localStorage.nhs_user))
const inputs = document.getElementById("gegevensForm").querySelectorAll("input")

for (let [index, input] of inputs.entries()) {
    input.value = user_info[index]
}

