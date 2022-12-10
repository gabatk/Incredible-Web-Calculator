const numberBtn = document.querySelectorAll('.calculator__btn-number');
const signBtn = document.querySelectorAll('.calculator__btn-sign');
const acBtn = document.querySelector('.calculator__btn-ac');
const delBtn = document.querySelector('.calculator__btn-del');
const equalBtn = document.querySelector('.calculator__btn-equal');
const score = document.querySelector('.score__value');
const dot = document.querySelector('.calculator__btn-dot');

let insertedValue = '';

const getNumber = () => {
	numberBtn.forEach(number => {
		number.addEventListener('click', () => {
			insertedValue = insertedValue + number.innerHTML;

			if (number.innerHTML === '.') {
				dot.disabled = true;
			}

			score.innerHTML = insertedValue;
		});
	});
};

getNumber();
