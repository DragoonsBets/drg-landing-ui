import FontFaceObserver from 'fontfaceobserver'

const Fonts = () => {
	const raleway = new FontFaceObserver('Raleway')

	const link = document.createElement('link')
	link.href = 'https://fonts.googleapis.com/css?family=Raleway:200,300,400,500'
	link.rel = 'stylesheet'

	document.head.appendChild(link)

	raleway.load().then(() => {
		console.log(document.head)
		document.documentElement.classList.add('raleway')
	})
}

export default Fonts
