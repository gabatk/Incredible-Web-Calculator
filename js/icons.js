const sectionIcons = document.querySelector('.icons');
const icons = sectionIcons.querySelectorAll('i');

const randomNumber = () => {
	let random;
	do {
		random = Math.floor(Math.random() * 10);
	} while (random === 10);

	return random;
};

const iconClass = () => {
	icons.forEach(icon => {
		icon.classList.add('fa-' + randomNumber());
	});
};

iconClass();
