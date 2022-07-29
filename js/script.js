function toggleMenu() {
    document.getElementById("burger_navigation").classList.toggle("open");
    document.getElementById("burger_icon").classList.toggle("open");
}

const x = document.getElementById("burger_icon");

x.onclick = toggleMenu;


const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"
}).format(now);
const year = now.getFullYear();
const today = now.getDay();

document.querySelector("#copyright_year").innerHTML = year;

document.getElementById("copyright_update").innerHTML = document.lastModified;

document.querySelector("#copyright_year_2").innerHTML = year;

document.getElementById("copyright_update_2").innerHTML = document.lastModified;