import mongoose from 'mongoose'
import portfolio from './portfolio'

const user = new mongoose.Schema({
	name: {
		type: String,
		required: true 
	},
	age: {
		type: Number,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	points: {
		type: Number,
		required: true
	},
	skills: {
		type: [String]
	},
	location: {
		type: String,
		required: true
	},
	portfolio: {
		type: [portfolio]
	},
	rank: {
		type: String,
		required: true
	}
})

export default mongoose.model('User', user)