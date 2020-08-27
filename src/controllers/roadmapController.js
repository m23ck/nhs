const current_token2 = localStorage.getItem("token");

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + current_token2);

// Roadmaps

fetch(`http://127.0.0.1:3000/roadmap/`, {
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
        body += "<td>" + i.id + "</td>";
        body += "<td>" + i.naam + "</td>";
        body += "<td>" + i.naam + "</td>";
        body += "<td>" + i.start_datum + "</td>";
        body += "<td>" + i.eind_datum + "</td>";
        body += `<td>
                    <a class='modal-trigger' href='#modal_update_roadmap' title='Wijzigen' data-toggle='tooltip' style='cursor: pointer;' onclick='return getRoadmapData(this)'><i class='small material-icons' style='color: #ffd600;'>edit</i></a>
                    <a title='Delete' data-toggle='tooltip' style='cursor: pointer;' ><i class='small material-icons' style='color: #c62828;'>delete</i></a>
                </td>`;
        body += "</tr>";
      });

      document.getElementById("roadmapTableBody").innerHTML = body;
    }
  })
  .catch((err) => console.log(err));


// Assignments


fetch(`http://127.0.0.1:3000/assignment/`, {
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
        body += "<td>" + i.id + "</td>";
        body += "<td>" + i.naam + "</td>";
        body += "<td>" + i.omschrijving + "</td>";
        body += "<td>" + i.start_datum + "</td>";
        body += "<td>" + i.inlever_datum + "</td>";
        body += "<td>" + i.punten + "</td>";
        body += "<td>" + i.herkansingspunten + "</td>";
        body += `<td>
                    <a class='modal-trigger' href='#modal_update_assignment' title='Wijzigen' data-toggle='tooltip' style='cursor: pointer;' onclick='return getRoadmapData(this)'><i class='small material-icons' style='color: #ffd600;'>edit</i></a>
                    <a title='Delete' data-toggle='tooltip' style='cursor: pointer;' ><i class='small material-icons' style='color: #c62828;'>delete</i></a>
                </td>`;
        body += "</tr>";
      });

      document.getElementById("roadmapTableBody").innerHTML = body;
    }
  })
  .catch((err) => console.log(err));

