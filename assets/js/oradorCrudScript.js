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
								<button class="btn btn-danger" >Borrar</button>
						<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarOrador"onclick="startModal(${el.id})">Editar</button>

						<div class="modal fade" id="editarOrador" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<h1 class="modal-title fs-5" id="exampleModalLabel">Editar orador</h1>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body" id="${el.id}">


								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button type="button" class="btn btn-primary">Save changes</button>
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
    });
};

const oradorList = getAllOradores();

function startModal(id) {
  const oradorForm = document.getElementById(id);
  oradorForm.innerHTML = oradorFormHTML;
  const form = oradorForm.children;
  const data = new FormData(form.item(0));
  console.log(data);
  oradorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
  });
}
