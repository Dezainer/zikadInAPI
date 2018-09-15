export default (app) => {

	app.route('/')
		.get((req, res) => res.send('zikadIn API'))
}