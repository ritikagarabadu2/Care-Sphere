// stats section
function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Counter increment logic
let patientCount = 0;
let doctorCount = 0;
let ambulCount = 4;

setInterval(() => {
    patientCount += Math.floor(Math.random() * 3) + 1;
    doctorCount += Math.floor(Math.random() * 1) + 1;
    ambulCount += Math.floor(Math.random() ) + 1;
    animateValue("patientCount", parseInt(document.getElementById("patientCount").textContent), patientCount, 18000);
    animateValue("doctorCount", parseInt(document.getElementById("doctorCount").textContent), doctorCount, 25000);
    animateValue("ambulCount", parseInt(document.getElementById("ambulCount").textContent), ambulCount, 12000);
}, 15000);

//    search div
document.getElementById('searchBtn').addEventListener('click', function() {
    const specialty = document.getElementById('specialitySelect').value;
    const doctor = document.getElementById('doctorSelect').value;

    if (specialty && doctor) {
        const url = `/${specialty}/${doctor}`; 
        window.location.href = url;
    } else {
        alert('Please select all fields.');
    }
});

// About us
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('active');
    });
});