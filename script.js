const monthEl = document.querySelector(".date h1")
const fullDateEl = document.querySelector(".date p")
const daysEl = document.querySelector(".days")


const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
console.log(lastDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();

let days = ""

for (let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`;
}

daysEl.innerHTML = days;