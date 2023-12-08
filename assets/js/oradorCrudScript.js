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
