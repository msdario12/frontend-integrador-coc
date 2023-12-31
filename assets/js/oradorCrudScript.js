const oradorTableContainer = document.getElementById("oradorTableContainer");

const printOradoresTable = (list) => {
  console.log(list);
  const headerTable = `<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Nombre</th>
						<th scope="col">Apellido</th>
						<th scope="col">Tema</th>
						<th scope="col">Email</th>
						<th scope="col">Fecha Alta</th>
						<th scope="col" class="text-center">Acción</th>
					</tr>
				</thead>
	`;
  const bodyTable = `<tbody>
${list.map(
  (el) =>
    `<tr>
						<th scope="row">${el.id}</th>
						<td>${el.name}</td>
						<td>${el.lastName}</td>
						<td>${el.theme}</td>
						<td>${el.email}</td>
						<td>${el.startDate}</td>
						<td>
							<div class="text-center">
								<button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteOrador${el.id}" >Borrar</button>
						<button type="button" class="btn btn-primary" onclick="startModal(${el.id})">Editar</button>

						<div class="modal fade" id="modalOrador${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h1 class="modal-title fs-5" id="exampleModalLabel">Editar orador</h1>
									<button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-target="modalOrador${el.id}" aria-label="Close"></button>
								</div>
									<div class="modal-body" id="${el.id}">
									</div>
								</div>
								</div>
							</div>
						</div>

						<div class="modal fade" id="deleteOrador${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h1 class="modal-title fs-5" id="exampleModalLabel">Borrar orador</h1>
									<button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-target="deleteOrador${el.id}" aria-label="Close"></button>
								</div>
									<div class="modal-body" id="${el.id}">
										<h3>Confirme eliminar el orador</h3>
									</div>
					<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
									<button type="button" class="btn btn-primary" onClick="deleteOradorById(${el.id})" data-bs-dismiss="modal" data-bs-target="#deleteOrador${el.id}">Borrar Orador</button>
								</div>
								</div>
								</div>
							</div>
						</div>

					</td>
					</tr>`
)}
				</tbody>`;
  oradorTableContainer.innerHTML = headerTable + bodyTable;
};

const getAllOradores = () => {
  let oradoresList = [];
  fetch(ENDPOINT)
    .then((res) => {
      const json = res.json();
      return json;
    })
    .then((json) => {
      oradoresList = json;
      printOradoresTable(json);
      return oradoresList;
    })
    .catch(() => console.log("Err"));
};

const setInputValue = (value, inputName, formHTML) => {
  let inputElement = formHTML.querySelector(`input[name="${inputName}"]`);
  if (!inputElement) {
    inputElement = formHTML.querySelector(`textarea[name="${inputName}"]`);
    return (inputElement.value = value);
  }
  inputElement.setAttribute("value", value);
  return inputElement;
};

function closeModal(id) {
  const modalHTML = document.getElementById(`modalOrador${id}`);
  const myModal = new bootstrap.Modal(modalHTML);
  myModal.hide();
}

function openModal(id) {
  const modalHTML = document.getElementById(`modalOrador${id}`);
  const myModal = new bootstrap.Modal(modalHTML);
  myModal.toggle();
}

function startModal(id) {
  openModal(id);
  const oradorForm = document.getElementById(id);
  oradorForm.innerHTML = oradorFormHTML;
  const submitButton = oradorForm.querySelector("button[type=submit]");
  submitButton.setAttribute("data-bs-dismiss", "modal");
  submitButton.setAttribute("data-bs-target", `modalOrador${id}`);
  let jsonData = {};
  // Get data based in a id
  fetch(ENDPOINT + `?id=${id}`)
    .then((res) => res.json())
    .then((json) => {
      const { name, lastName, email, theme } = json;
      jsonData = json;
      setInputValue(name, "firstName", oradorForm);
      setInputValue(lastName, "lastName", oradorForm);
      setInputValue(email, "mail", oradorForm);
      setInputValue(theme, "theme", oradorForm);
    })
    .catch((e) => console.log(e));
  oradorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    handleSubmitOradorForm(
      e,
      "PUT",
      "Se edito correctamente el orador.",
      {},
      id,
      closeModal
    );
  });
}

function deleteOradorById(id) {
  fetch(ENDPOINT + `?id=${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch(() => console.log("LO"))
    .finally(() => getAllOradores());
}

const oradorList = getAllOradores();
