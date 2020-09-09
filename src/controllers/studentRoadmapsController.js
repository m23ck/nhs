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
        const roadmapList = document.getElementById('roadmapList')
      data.data.forEach((i) => {
        let listItem = document.createElement("li")
        let link = document.createElement("a")
        // listItem.textContent = i.roadmap_naam
        link.textContent = i.roadmap_naam
        // link.onclick = printID(this)
        // link.title = i.roadmap_id
        link.setAttribute('data-roadmap_id', i.roadmap_id)
        link.setAttribute('href', '#')
        link.setAttribute('onclick', "viewAssignments(this)")
        listItem.appendChild(link)
        roadmapList.appendChild(listItem)
      });

    }
  })
  .catch((err) => console.log(err));
//   getElementById("")

function viewAssignments(roadmap){

    let roadmap_id = roadmap.getAttribute('data-roadmap_id')
    // getAssignments(roadmap_id)
    document.getElementById('roadmapsContainer').style = "none"
    document.getElementById('assignmentsContainer').style = "block"

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
                  <a class='modal-trigger' href='#modal_update_assignment' title='Wijzigen' data-toggle='tooltip' style='cursor: pointer;' onclick='return getAssignmentData(this)'><i class='small material-icons' style='color: #ffd600;'>edit</i></a>
                  <a title='Delete' data-toggle='tooltip' style='cursor: pointer;'  onclick='return deleteAssignmentCheck(this)'><i class='small material-icons' style='color: #c62828;'>delete</i></a>
              </td>`;
        body += "</tr>";
        
      });
      document.getElementById("assignmentsTableBody").innerHTML = body;
      document.getElementById("AssignmentsHeader").innerHTML = data.data[0].roadmap_naam;

      
    }
  })
  .catch((err) => console.log(err));

}



function hideAssignments(){
  document.getElementById('roadmapsContainer').style = "block"
  document.getElementById('assignmentsContainer').style = "none"  
}

function unhideAssignments(){
  document.getElementById('roadmapsContainer').style = "none"
  document.getElementById('assignmentsContainer').style = "block"  
}