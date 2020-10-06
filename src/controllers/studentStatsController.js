const current_token3 = localStorage.getItem("token");

// const myHeaders = new Headers();
myHeaders.set("Authorization", "Bearer " + current_token3);
// const type_user = "docent"
fetch(`http://127.0.0.1:3000/assignment/pending/${JSON.parse(localStorage.getItem("nhs_user")).gebruiker_id}`, {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    let { pending_assignments } = result.data
    if (pending_assignments >= 0) {
      document.getElementById("pending_assignments").innerHTML = pending_assignments
    }
  })
  .catch((err) => console.log(err));
