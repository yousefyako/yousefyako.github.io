const hamburgerMenu = document.querySelector("#hamburger");
const hamburgerLine = document.querySelectorAll(".hamburgerLine");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body");
const darkModeButton = document.querySelector("#darkModeButton")

hamburgerMenu.addEventListener("click", () => {
	toggleMenu();
});

hLinks.forEach((link) => {
	link.addEventListener("click", () => {
		toggleMenu();
	});
});

const toggleMenu = () => {
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

// use the users preferred theme based on device
body.classList.toggle(
	"dark",
	localStorage.currentTheme === "dark" ||
	  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  );