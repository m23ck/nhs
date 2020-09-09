const gebruiker_id = JSON.parse(localStorage.getItem("nhs_user")).id;
const current_token = localStorage.getItem("token");

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + current_token);

function redirectIfNotPermitted() {
  fetch(`http://127.0.0.1:3000/gebruiker/${gebruiker_id}`, {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data.type);
      type_id = JSON.parse(localStorage.getItem("nhs_user")).gebruiker_type_id;
      let type;
      if (type_id == 1) {
        type = "admin";
      } else if (type_id == 2) {
        type = "docent";
      } else if (type_id == 3) {
        type = "student";
      }

      if (type != data.data.type) {
        console.log(data.data.type);
        localStorage.removeItem("nhs_user");
        localStorage.setItem("nhs_user", JSON.stringify(data.data));
        window.location.replace("../../../index.html");
        alert("U Mag deze pagina niet bezoeken!");
      }
    })
    .catch((err) => {
      console.error(err);
    });
  return false;
}

function redirectIfNoToken() {
  if (current_token == null) {
    window.location.replace("../../../index.html");
    alert("U Moet Eerst Inloggen!");
  }
}
