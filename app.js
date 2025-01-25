const hamburgerMenu = document.querySelector("#hamburger");
const hamburgerLine = document.querySelectorAll(".hamburgerLine");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body");
const darkModeButton = document.querySelector("#darkModeButton")

hamburgerMenu.addEventListener("click", () => {
	closeMenu();
});

hLinks.forEach((link) => {
	link.addEventListener("click", () => {
		closeMenu();
	});
});

const closeMenu = () => {
	menu.classList.toggle("hidden");
	hamburgerLine.forEach((line) => {
		line.classList.toggle("bg-white");
	});
};

darkModeButton.addEventListener("click", () => {
	toggleDarkMode();
})

const toggleDarkMode = () => {
	body.classList.toggle("dark")
}