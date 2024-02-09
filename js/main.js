const hamburgerBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')

const hamburgerHandler = () => {
	hamburgerBtn.classList.toggle('is-active')
	mobileMenu.classList.toggle('-left-[-1100px]')
	mobileMenu.classList.toggle('left-0')
}

hamburgerBtn.addEventListener('click', hamburgerHandler)

console.log(hamburgerBtn)
