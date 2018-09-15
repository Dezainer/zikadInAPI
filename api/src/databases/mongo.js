import mongoose from 'mongoose'

export default () => {
	let connUrl = `mongodb://localhost/zikadIn`

	mongoose.Promise = global.Promise
	mongoose.connect(connUrl)

}