import Post from '../models/post'
import LinkedPost from '../models/linkedPost'

const postTypes = {
	'default': Post,
	'linked': LinkedPost
}

const getPostSchema = type => {
	return postTypes[type]
}

export default { getPostSchema }