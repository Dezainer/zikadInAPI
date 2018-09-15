import LinkedPost from '../models/linkedPost'

import PostHelper from '../helpers/postHelper'
import ResponseHelper from '../helpers/responseHelper'

const get = (req, res) => {
	LinkedPost.find()
		.populate('userId')
		.populate('linkedUserId')
		.exec((err, posts) => {
			err
				? ResponseHelper.handleError(res, err, 'Something went wrong!')
				: res.send(posts)
		})
}

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

export default { get, create }