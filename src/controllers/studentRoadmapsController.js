const current_token2 = localStorage.getItem("token");
const student_id = JSON.parse(localStorage.getItem("nhs_user")).gebruiker_id

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + current_token2);
// console.log(student_id)
fetch(`http://127.0.0.1:3000/roadmap/student/${student_id}`, {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    if (data.data.length > 0) {
      var body = "";

      data.data.forEach((i) => {
        body += "<tr>";
        body += "<td>" + i.roadmap_id + "</td>";
        body += "<td>" + i.roadmap_naam + "</td>";
        body += "<td>" + new Date(i.start_datum).toDateString() + "</td>";
        body += "<td>" + new Date(i.eind_datum).toDateString() + "</td>";
        body += `<td>
                    <a class='modal-trigger' href='#modal_roadmap' title='Go' data-toggle='tooltip' style='cursor: pointer;' onclick='return viewAssignments(this)'><i class='small material-icons' style='color: #4285F4;'>preview</i></a>
                </td>`;
        body += "</tr>";
      });

      document.getElementById("roadmapsTableBody").innerHTML = body;
    }
  })
  .catch((err) => console.log(err));

function viewAssignments(td){
  selectedRow = td.parentElement.parentElement;
    let roadmap_id =  selectedRow.cells[0].innerHTML;

fetch(`http://127.0.0.1:3000/assignment/roadmap/${roadmap_id}`, {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
})
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.data[0]);
    // console.log("results: ",data.data.length);

    if (data.data.length > 0) {
      var body = "";
      // assignments = data.data;
      
      data.data.forEach((i) => {
        body += "<tr>";
        body += "<td>" + i.id + "</td>";
        body += "<td>" + i.assignment_naam + "</td>";
        body += "<td>" + i.omschrijving + "</td>";
        body += "<td>" + new Date(i.start_datum).toDateString() + "</td>";
        body += "<td>" + new Date(i.inlever_datum).toDateString() + "</td>";
        body += "<td>" + i.punten + "</td>";
        body += "<td>" + i.herkansingspunten + "</td>";
        // body += `<td>
        //           <a class='modal-trigger nhs-green' href='#modal_roadmap' title='Wijzigen' data-toggle='tooltip' style='cursor: pointer;' ><i class='small material-icons' style='color: #228B22;'>check</i></a>
        //           </td>`;
        body += "</tr>";
        
      });
      document.getElementById("assignmentsModalContentBody").innerHTML = body;
      document.getElementById("roadmap_modal_title").innerHTML = data.data[0].roadmap_naam;
      

    }
  })
  .catch((err) => console.log(err));

}






