const score = document.querySelector('.score__value');
const insertedValue = document.querySelector('.tip__placeholder');
const tipBtns = document.querySelectorAll('.tip__rate-btn');
const otherValue = document.querySelector('.tip__rate-other');
const otherBtn = document.querySelector('.tip__rate-other-btn');

const suggestedValue = () => {
	tipBtns.forEach(tipBtn => {
		tipBtn.addEventListener('click', () => {
			let rate = tipBtn.innerHTML.slice(0, tipBtn.innerHTML.length - 1);
			let billValue = insertedValue.value;
			score.innerHTML = 'Your tip: ' + eval((rate / 100) * billValue);
			insertedValue.value = '';
		});
	});
};

const differentValue = () => {
	let rate = otherValue.value;
	let billValue = insertedValue.value;
	score.innerHTML = 'Your tip: ' + eval((rate / 100) * billValue);
	insertedValue.value = '';
	otherValue.value = '';
};

suggestedValue();
otherBtn.addEventListener('click', differentValue);
