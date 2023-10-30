const ticketForm = document.getElementById('ticketForm');
const resultHTML = document.getElementById('resultContainer');
const TICKET_PRICE = 200;
const listOfInputNames = ['name', 'lastname', 'email', 'quantity', 'category'];

const validateInput = (listOfNames) => {
	listOfNames.forEach((name) => {
		const inputHTML = document.getElementById(name);
		if (!inputHTML.value) {
			inputHTML.classList.add('border-2', 'border-danger', 'text-danger');
			return;
		}
	});
};

const resetStatusOfInput = (listOfNames) => {
	listOfNames.forEach((name) => {
		const inputHTML = document.getElementById(name);
		inputHTML.classList.remove('border-2', 'border-danger', 'text-danger');
	});
	resultHTML.classList.remove('alert-danger');
	resultHTML.classList.add('alert-primary');
};

ticketForm.addEventListener('change', (e) => {
	resetStatusOfInput(listOfInputNames);
});

ticketForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	// Para el calculo
	const quantity = Number(formData.get('quantity'));
	const category = Number(formData.get('category'));
	// Campos adicionales
	const name = formData.get('name');
	const lastname = formData.get('lastname');
	const email = formData.get('email');
	validateInput(listOfInputNames);
	if (!name || !lastname || !email || !quantity || !category) {
		resultHTML.classList.remove('alert-primary');
		resultHTML.classList.add('alert-danger');
		resultHTML.innerHTML =
			'Por favor rellene todos los campos antes de continuar.';
		return;
	}
	const result = Math.round(TICKET_PRICE * quantity * (1 - category), 2);
	resultHTML.innerHTML = `Total a pagar $ ${result}`;
});

ticketForm.addEventListener('reset', () => {
	resultHTML.innerHTML =
		'Por favor rellene todos los datos para obtener el monto total a abonar.';

	resetStatusOfInput(listOfInputNames);
});
