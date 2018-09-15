import PostHelper from '../helpers/postHelper'
import ResponseHelper from '../helpers/responseHelper'

const create = (req, res) => {
	let Schema = PostHelper.getPostSchema(req.params.type),
		post = new Schema(getPostWithType(req.body, req.params.type))

	post.save(err => {
		err
			? ResponseHelper.handleError(res, err, 'Something went wrong!')
			: res.send(post)
	})
}

const getPostWithType = (post, type) => {
	post.type = type
	return post
}

export default { create }