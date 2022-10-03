const darkmodeInput = document.querySelector(".darkmodeToggle");
const dataToggle = document.querySelector("html");

darkmodeInput.addEventListener("click", () => {
	localStorage.setItem("darkMode", darkmodeInput.checked);
	let darkMode = JSON.parse(localStorage.getItem("darkMode"));
	console.log(darkMode);
	if (darkMode === true) {
		dataToggle.setAttribute("data-theme", "dark");
	} else if (darkMode === false) {
		dataToggle.setAttribute("data-theme", "light");
	}
});

window.addEventListener("load", () => {
	let darkMode = JSON.parse(localStorage.getItem("darkMode"));
	if (darkMode === true) {
		dataToggle.setAttribute("data-theme", "dark");
		darkmodeInput.checked = true;
	} else if (darkMode === false) {
		dataToggle.setAttribute("data-theme", "light");
		darkmodeInput.checked = false;
	}
});
