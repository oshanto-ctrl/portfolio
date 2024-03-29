const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

var pdfContainer = document.getElementById('pdfContainer');
// Showing pdf
function showPDF() {
	
	// pdfContainer.innerHTML = "<embed src='other_assets/resume_rejoan_siddiky.pdf' type='application/pdf' width='100%' height='100%' />"
	var pdfPath = "resume/resume_rejoan_siddiky.pdf";
	window.open(pdfPath, '_blank');
}

// Changing roles in about__role @ index.html
// about section.

document.addEventListener("DOMContentLoaded",
	function(){
		const roleElement = document.querySelector(".about__role");
		const roles = ["A CS Undergrad.", "An Aspiring SWE.", "An Aspiring Researcher.", "A Good Friend."];

		let i = 0;

		function changeRole(){
			roleElement.style.optacity = 0;

			setTimeout(	function() {
				roleElement.textContent = roles[i];
				i = (i + 1) % roles.length;
				roleElement.style.optacity = 1;
			}, 500);
		}

		// changes of role every 2 seconds
		setInterval(changeRole, 2000);
	}
);

