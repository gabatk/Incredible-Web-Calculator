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
			insertedValue = score.innerHTML;
			insertedValue = insertedValue + number.innerHTML;

			if (number.innerHTML === '.') {
				dot.disabled = true;
			}

			score.innerHTML = insertedValue;
		});
	});
};

const getSign = () => {
	signBtn.forEach(sign => {
		sign.addEventListener('click', () => {
			if (insertedValue !== '' || sign.innerHTML === '-') {
				dot.disabled = false;

				score.innerHTML = insertedValue + sign.innerHTML;
			}
		});
	});
};

const clearAll = () => {
	acBtn.addEventListener('click', () => {
		score.innerHTML = '';
		insertedValue = '';
	});
};

const deleteLast = () => {
	delBtn.addEventListener('click', () => {
		score.innerHTML = score.innerHTML.slice(0, -1);
		insertedValue = score.innerHTML;
	});
};

const calculate = () => {
	equalBtn.addEventListener('click', () => {
		score.innerHTML = eval(insertedValue);
	});
};

getNumber();
getSign();
clearAll();
deleteLast();
calculate();
