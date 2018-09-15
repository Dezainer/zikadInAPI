const handleError = (res, err, msg) => {
	res.status(400).send({ msg, err })
}

export default { handleError }