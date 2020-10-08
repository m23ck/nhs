let roadmaps = []
let assignments = []
let fetchOptions = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
}

let parseEvents = function () {
    let events = []
    for (let assignment of assignments) {
        let { assignment_naam: title, start_datum: start, inlever_datum: end } = assignment
        { events.push({ title, start, end }) }
    }
    return events
}



document.addEventListener('DOMContentLoaded', async function () {
    await fetch(`http://127.0.0.1:3000/roadmap/student/11`, fetchOptions)
        .then((res) => res.json())
        .then(async ({ data }) => {
            roadmaps = data.map(x => x)
            for (let roadmap of roadmaps) {
                console.log(roadmap)
                await fetch(`http://127.0.0.1:3000/assignment/roadmap/${roadmap.roadmap_id}`, fetchOptions)
                    .then(res => res.json())
                    .then(({ data }) => { for (let x of data) { assignments.push(x) } })
            }
        })
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: parseEvents()
    });
    calendar.render();


});