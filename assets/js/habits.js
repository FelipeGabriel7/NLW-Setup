const form = document.querySelector(`.form-habits`);
const nlwSetup = new NLWSetup(form);
const button = document.querySelector(`.btn-add`);

button.addEventListener(`click`, addDays);
form.addEventListener(`change`, saveDays);

function addDays() {
  const today = new Date().toLocaleDateString(`pt-br`).slice(0, 5);

  if (nlwSetup.dayExists(today)) {
    return alert(` Dia existente ! `);
  }

  alert(` Novo dia adicionado ! `);
  nlwSetup.addDay(today);
}

function saveDays() {
  console.log(nlwSetup.data);

  localStorage.setItem(`Habits`, JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem(`Habits`)) || {};

  nlwSetup.setData(data);
  nlwSetup.load();

