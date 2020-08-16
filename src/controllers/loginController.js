function redirectIfToken() {
    jwToken = localStorage.getItem("token");
    if (jwToken != null) {
      window.location.replace("./src/views/dashboard.html");
      alert("Er is al een gebruiker ingelogd!");
    }
  }
  window.onload = function () {
    document.getElementById('loginForm').addEventListener('submit', inloggen);
    redirectIfToken();
  }
  
  
  function inloggen() {
    let form = document.forms["loginForm"];
    let fd = new FormData(form);
    let data = {};
    for (let [key, prop] of fd) {
      data[key] = prop;
    }
    VALUE = JSON.stringify(data, null, 2);
  
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  
    fetch('http://127.0.0.1:3000/server/gebruiker/login', {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: VALUE
    })
      .then(data => data.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("gebruiker_id", data.id);
          window.location.replace("./src/views/dashboard.html");
  
        } else {
  
          alert("Gebruikersnaam of Wachtwoord Onjuist!");
        }
  
      })
      .catch((err) => {
        console.error(err);
      })
    return false;
  }