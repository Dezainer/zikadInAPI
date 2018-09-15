import User from '../models/user'
import RankHelper from '../helpers/rankHelper'
import ResponseHelper from '../helpers/responseHelper'

const create = (req, res) => {
	let user = new User(getUserWithRank(req.body))
	user.save(err => {
		err 
			? ResponseHelper.handleError(res, err, 'Something went wrong!')
			: res.send(user)
	})
}

const update = (req, res) => {
	User.findByIdAndUpdate(req.params.id, getUserWithRank(req.body), err => {
		err
			? ResponseHelper.handleError(res, err, 'Something went wrong!')
			: res.send("Updated successfully")
	})
}

const getById = (req, res) => {
	User.findById(req.params.id, (err, user) => {
		err
			? ResponseHelper.handleError(res, err, 'Something went wrong!')
			: res.send(user)
	})
}

const getUserWithRank = user => {
	user.rank = RankHelper.getRank(user.points)
	return user
}

export default { create, update, getById }