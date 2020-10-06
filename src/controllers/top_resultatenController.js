const current_token2 = localStorage.getItem("token");

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + current_token2);
// const type_user = "docent"
fetch(`http://127.0.0.1:3000/resultaat/top/`, {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
})
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.data.length);

    if (data.data.length > 0) {
      var body = "";

      data.data.forEach((i) => {
        body += "<tr>";
        body += "<td>" + i.naam + "</td>";
        body += "<td>" + i.voornaam + "</td>";
        body += "<td>" + i.klas_naam + "</td>";
        body += "<td>" + i.score + "</td>";
        body += "</tr>";
      });

      document.getElementById("topResultsBody").innerHTML = body;
    }
  })
  .catch((err) => console.log(err));
