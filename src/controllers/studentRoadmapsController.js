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
        body += "<td>" + i.start_datum + "</td>";
        body += "<td>" + i.eind_datum + "</td>";
        body += `<td>
                    <a title='Go' data-toggle='tooltip' style='cursor: pointer;'  onclick='return viewAssignments(this)'><i class='small material-icons' style='color: #4285F4;'>preview</i></a>
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
    console.log(data.data[0]);
    // console.log("results: ",data.data.length);

    if (data.data.length > 0) {
      var body = "";
      // assignments = data.data;
      
      data.data.forEach((i) => {
        body += "<tr>";
        body += "<td>" + i.id + "</td>";
        body += "<td>" + i.assignment_naam + "</td>";
        body += "<td>" + i.omschrijving + "</td>";
        body += "<td>" + i.start_datum + "</td>";
        body += "<td>" + i.inlever_datum + "</td>";
        body += "<td>" + i.punten + "</td>";
        body += "<td>" + i.herkansingspunten + "</td>";
        body += `<td>
                  <a class='modal-trigger' href='#modal_update_assignment' title='Wijzigen' data-toggle='tooltip' style='cursor: pointer;' onclick='return submitCheck(this)'><i class='small material-icons' style='color: #228B22;'>check</i></a>
                  </td>`;
        body += "</tr>";
        
      });
      document.getElementById("assignmentsTableBody").innerHTML = body;
      document.getElementById("AssignmentsHeader").innerHTML = data.data[0].roadmap_naam;

      hideRoadmaps_viewAssignments()
    }
  })
  .catch((err) => console.log(err));

}



function hideAssignments_viewRoadmaps(){
  document.getElementById('roadmapsContainer').style = "block"
  document.getElementById('assignmentsContainer').style = "none"  
  window.location.reload()
}

function hideRoadmaps_viewAssignments(){
  document.getElementById('roadmapsContainer').style = "none"
  document.getElementById('assignmentsContainer').style = "block"  
}




function submitCheck(td) {
  selectedRow = td.parentElement.parentElement;
  let assignment_id = selectedRow.cells[0].innerHTML;
  let student_id = JSON.parse(localStorage.getItem("nhs_user")).gebruiker_id


  function submitAssignment() {
    let fd = new FormData();
    fd.append('assignment_id', assignment_id)
    fd.append('student_id', student_id)
    fd.append('status', "submitted")
    let data = {};
    for (let [key, prop] of fd) {
      data[key] = prop;
    }
    VALUE = JSON.stringify(data, null, 2);
  
    console.log(VALUE);
  
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + current_token2);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
  
    fetch("http://127.0.0.1:3000/assignment_submission", {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
      body: VALUE,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Success", res);
        location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  
    return false;
  }

  if (confirm("Bent u zeker?")) {
    submitAssignment();
  }
}





