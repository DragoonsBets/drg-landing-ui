import FontFaceObserver from 'fontfaceobserver'

const Fonts = () => {
	const raleway = new FontFaceObserver('Raleway')
	const roboto = new FontFaceObserver('Roboto')

	const link = document.createElement('link')
	
	link.href = 'https://fonts.googleapis.com/css?family=Raleway:200,300,400,500'
	link.rel = 'stylesheet'

	document.head.appendChild(link)

	const linkMontserrat = document.createElement('link')
	linkMontserrat.href = 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500&text=0123456789'
	linkMontserrat.rel = 'stylesheet'

	document.head.appendChild(linkMontserrat)

	raleway.load().then(() => {
		document.documentElement.classList.add('raleway')
		document.documentElement.classList.add('montserrat')
	})
}

export default Fonts
