const validateInput = (listOfNames) => {
  listOfNames.forEach((name) => {
    const inputHTML = document.getElementById(name);
    if (!inputHTML.value) {
      inputHTML.classList.add("border-2", "border-danger", "text-danger");
      return;
    }
  });
};

const resetStatusOfInput = (listOfNames) => {
  listOfNames.forEach((name) => {
    const inputHTML = document.getElementById(name);
    inputHTML.classList.remove("border-2", "border-danger", "text-danger");
  });
  resultHTML.classList.remove("alert-danger");
  resultHTML.classList.add("alert-primary");
};
