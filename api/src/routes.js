import UserController from './controllers/userController'
import PostController from './controllers/postController'

export default (app) => {

	app.route('/')
		.get((req, res) => res.send('zikadIn API'))

	app.route('/user')
		.post(UserController.create)

	app.route('/user/:id')
		.get(UserController.getById)
		.put(UserController.update)

	app.route('/posts')
		.get(PostController.get)

	app.route('/posts/:type')
		.post(PostController.create)
}