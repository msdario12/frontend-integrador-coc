const oradorForm = document.getElementById("oradorForm");
const INPUTS_NAMES = ["firstName", "lastName", "mail", "theme"];
const ENDPOINT = "http://localhost:8080/integradorbackend/api/orador";

oradorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submit");
  const formData = new FormData(e.target);
  let objectData = {};
  INPUTS_NAMES.forEach((name) => {
    objectData = { ...objectData, [name]: formData.get(name) };
  });
  console.log(objectData);
  fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(objectData),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
});
