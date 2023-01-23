const navbar = document.querySelector(`.navbar-app`);
const components = document.querySelector(`.components`);
const btn = document.querySelector(`.btn`)
const init = document.querySelector(`.init`);

function toggleInitHabits() {
    
    btn.addEventListener(`click`, () => {
        navbar.classList.remove(`invisible`)
        components.classList.remove(`invisible`)
        init.classList.add(`invisible`)
    })

}

toggleInitHabits();