const sectionIcons = document.querySelector('.icons');
const icons = sectionIcons.querySelectorAll('i');

const randomNumber = () => {
	do {
		let random = Math.floor(Math.random() * 10);
	} while (random === 10);

	return random;
};
