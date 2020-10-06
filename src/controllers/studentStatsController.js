const current_token2 = localStorage.getItem("token");

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + current_token2);
// const type_user = "docent"
fetch(`http://127.0.0.1:3000/assignment/pending/${JSON.parse(localStorage.getItem("nhs_user")).gebruiker_id}`, {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.data.length);

    if (data.data.length > 0) {
        document.getElementById("pending_assignments").innerHTML = data.data;
    }
  })
  .catch((err) => console.log(err));
