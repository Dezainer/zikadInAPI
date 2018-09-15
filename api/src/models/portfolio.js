import mongoose from 'mongoose'

const portfolio = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	field: {
		type: String,
		required: true
	}
})

export default portfolio