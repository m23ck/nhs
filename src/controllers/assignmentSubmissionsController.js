const current_token2 = localStorage.getItem("token");
const student_id = JSON.parse(localStorage.getItem("nhs_user")).gebruiker_id;

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + current_token2);

function getKlassen() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + current_token2);

  fetch("http://127.0.0.1:3000/klas", {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // console.log(data.data.length);
      if (data.data.length > 0) {
        data.data.forEach((i) => {
          let dropdown = document.getElementById("jaar_klas_id");

          let option = document.createElement("option");
          option.setAttribute("value", `${i.klas_id}`);
          option.textContent = i.klas_naam;
          // console.log(option)
          dropdown.appendChild(option);
          // console.log(dropdown)
        });
        refreshSelect(document.getElementById("jaar_klas_id"));
      }
    })
    .catch((err) => console.log(err));

  // return false;
}

function getRoadmaps() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + current_token2);

  fetch("http://127.0.0.1:3000/roadmap", {
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
        data.data.forEach((i) => {
          let dropdown = document.getElementById("roadmap_id");

          let option = document.createElement("option");
          option.setAttribute("value", `${i.id}`);
          option.textContent = i.roadmap_naam;
          // console.log(option)
          dropdown.appendChild(option);
          // console.log(dropdown)
        });
        refreshSelect(document.getElementById("roadmap_id"));
      }
    })
    .catch((err) => console.log(err));

  // return false;
}

function fillSelects() {
  getKlassen();
  getRoadmaps();
}

function requestSubmissions() {
  let form = document.forms["requestSubmissionsForm"];
  let fd = new FormData(form);
  let data = {};
  for (let [key, prop] of fd) {
    data[key] = prop;
  }
  VALUE = JSON.stringify(data, null, 2);

  console.log(VALUE);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + current_token2);

  fetch(`http://127.0.0.1:3000/assignment_submissions/${JSON.parse(VALUE).jaar_klas_id}/${JSON.parse(VALUE).roadmap_id}/${JSON.parse(VALUE).status}`, {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  })
    .then((res) => res.json())
    .then((data) => {
        
      console.log(data);
      
      // console.log(data.data.length);
      if (data.data.length > 0) {
        data.data.forEach((i) => {
        //   let dropdown = document.getElementById("jaar_klas_id");

        //   let option = document.createElement("option");
        //   option.setAttribute("value", `${i.id}`);
        //   option.textContent = i.klas_naam;
        //   // console.log(option)
        //   dropdown.appendChild(option);
        //   // console.log(dropdown)
        });
        // refreshSelect(document.getElementById("jaar_klas_id"));
      }
    })
    .catch((err) => console.log(err));

  // return false;
}
