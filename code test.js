const dropdown = document.querySelector("#mouduleSection");
document.querySelector("#scrollDown")
    .addEventListener("click", function () {
        console.log(dropdown.style.display);
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";

        } else {
            dropdown.style.display = "block";
        }
    });


const btns = document.querySelectorAll('.dropbtn')
function showDrpDown(e) {
    e.target.parentNode.nextElementSibling.classList.toggle('show');

}

btns.forEach(btn => {
    btn.addEventListener('click', showDrpDown)
})





const nav = document.querySelector(".sideNavbar-main");
const background = document.querySelector(".blackBackground")

document.querySelector("#menu").addEventListener("click", function () {
    nav.classList.toggle("sideNavbar_open");
    background.classList.toggle("blackBackground_open");
})

background.addEventListener("click", function () {
    nav.classList.toggle("sideNavbar_open");
    background.classList.toggle("blackBackground_open");
})

const calendar = document.querySelector(".calendarPanel");
const xtab = document.querySelector(".closetab");
document.querySelector("#calendar").addEventListener("click", function () {
    calendar.classList.toggle("calendarPanel_open");
    xtab.classList.toggle("closetab_open");
})

document.querySelector("#whiteLogo").addEventListener("click", function () {
    calendar.classList.toggle("calendarPanel_open");
})





