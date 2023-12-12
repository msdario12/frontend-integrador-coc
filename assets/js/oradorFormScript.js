document.getElementById("oradorFormContainer").innerHTML = oradorFormHTML;
const oradorForm = document.getElementById("oradorForm");
const resultOradorHTML = document.getElementById("resultOradorContainer");
const INPUTS_NAMES = ["firstName", "lastName", "mail", "theme"];
const ENDPOINT = "http://localhost:8080/integradorbackend/api/orador";

function sendDataToBackend(method, data, msg) {
  fetch(ENDPOINT, {
    method: method,
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      resultOradorHTML.classList.remove("alert-danger");
      resultOradorHTML.classList.add("alert-primary");
      resultOradorHTML.innerHTML = msg;
      getAllOradores();
    });
}

function handleSubmitOradorForm(e, method, msg) {
  const formData = new FormData(e.target);
  let objectData = {};
  let isInvalid = false;
  INPUTS_NAMES.forEach((name) => {
    if (!formData.get(name)) {
      resultOradorHTML.classList.remove("alert-primary");
      resultOradorHTML.classList.add("alert-danger");
      resultOradorHTML.innerHTML =
        "Por favor llene todos los campos antes de enviar los datos.";
      isInvalid = true;
    } else {
      resultOradorHTML.classList.remove("alert-danger");
      resultOradorHTML.classList.add("alert-primary");
    }
    objectData = { ...objectData, [name]: formData.get(name) };
  });
  validateInput(INPUTS_NAMES);
  if (isInvalid) return;
  console.log(objectData);
  sendDataToBackend(method, objectData, msg);
}

oradorForm.addEventListener("change", () => resetStatusOfInput(INPUTS_NAMES));

oradorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmitOradorForm(e, "POST", "Se creo correctamente el orador.");
});
