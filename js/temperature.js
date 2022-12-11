const score = document.querySelector('.score__value');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const insertedNumber = document.querySelector('.converter__placeholder');
const convBtn = document.querySelector('.converter__btn-conv');
const resetBtn = document.querySelector('.converter__btn-reset');
const swapBtn = document.querySelector('.converter__btn-swap');

// T(°F) = T(°C) x 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

const celToFahr = () => {
	const fahrenheit = insertedNumber.value * 1.8 + 32;
	score.innerHTML = `${converter.value}°C equals ${fahrenheit.toFixed(1)}°F`;
	insertedNumber.value = '';
};

const fahrToCel = () => {
	const celsius = (insertedNumber.value - 32) / 1.8;
	score.innerHTML = `${converter.value}°F equals ${celsius.toFixed(1)}°C`;
	insertedNumber.value = '';
};

const convert = () => {
	if (insertedNumber.value !== '') {
		if (one.textContent === '°C') {
			celToFahr();
		} else {
			fahrToCel();
		}
	} else {
		score.innerHTML = 'Please provide some value';
		score.style.color = 'tomato';
		score.style.fontSize = '20px';
	}
};

const reset = () => {
	score.innerHTML = '';
	insertedNumber.value = '';
};

resetBtn.addEventListener('click', reset);
convBtn.addEventListener('click', convert);
