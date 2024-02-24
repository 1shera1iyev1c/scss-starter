let elBtn = document.querySelector('.btn__div')
let elCloseBtn = document.querySelector('.close__btn')
let elBurgerMenu = document.querySelector(".burger__close")

elBtn.addEventListener("click", function () {
    elBurgerMenu.classList.add("burger__menu")
    elBurgerMenu.classList.remove("burger__close")
})

elCloseBtn.addEventListener("click", function () {
    elBurgerMenu.classList.add("burger__close")
    elBurgerMenu.classList.remove("burger__menu")
})