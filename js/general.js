const simple = document.querySelector('.calculator');
const temp = document.querySelector('.converter');
const tip = document.querySelector('.tip');
const sectionType = document.querySelector('.type');
const checkbox = sectionType.querySelectorAll('input');
const webCalculator = document.querySelectorAll('.web-calculator');
const score = document.querySelector('.score__value');

const typeDict = {
	simple__input: simple,
	temp__input: temp,
	tip__input: tip,
};

const selectType = () => {
	checkbox.forEach(element => {
		element.addEventListener('click', () => {
			uncheck();
			classHidden();
			scoreClear();
			element.checked = true;
			typeDict[element.id].classList.remove('hidden');
		});
	});
};

const uncheck = () => {
	checkbox.forEach(element => {
		element.checked = false;
	});
};

const classHidden = () => {
	webCalculator.forEach(element => {
		if (!element.classList.contains('hidden')) {
			element.classList.add('hidden');
		}
	});
};

const scoreClear = () => {
	score.innerHTML = '';
};

selectType();
