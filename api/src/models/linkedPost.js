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
	linkedUserId: {
		type: mongoose.Schema.ObjectId,
		required: true
	},
	action: {
		type: String,
		enum: ['Ameaçou', 'Recomendou']
	}
})

export default mongoose.model('LinkedPost', post, 'posts')