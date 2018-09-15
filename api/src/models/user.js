import mongoose from 'mongoose'

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
		reuired: true
	},
	skills: [String],
	location: {
		type: String,
		required: true
	}
})

User.pre('find', function() {
	this.rank = 'Fogueteiro'
})

export default mongoose.model('User', user)