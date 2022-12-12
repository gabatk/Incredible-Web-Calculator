const score = document.querySelector('.score__value');
const insertedValue = document.querySelector('.tip__placeholder');
const tipBtns = document.querySelectorAll('.tip__rate-btn');

const suggestedValue = () => {
	tipBtns.forEach(tipBtn => {
		tipBtn.addEventListener('click', () => {
			if (tipBtn.innerHTML.endsWith('%')) {
				const rate = tipBtn.innerHTML.slice(0, tipBtn.innerHTML.length - 1);
				const billValue = insertedValue.value;
				score.innerHTML = eval((rate / 100) * billValue);
				tipBtn.innerHTML = '';
				console.log(rate);
				console.log(billValue);
			}
		});
	});
};
suggestedValue();
