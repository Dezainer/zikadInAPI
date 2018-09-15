import mongoose from 'mongoose'

const post = new mongoose.Schema({
	type: {
		type: String,
		required: true
	},
	userId: {
		type: mongoose.Schema.ObjectId,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	picture: {
		type: String
	}
})

export default mongoose.model('Post', post, 'posts')