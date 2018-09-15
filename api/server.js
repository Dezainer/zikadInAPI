import express from 'express'
import routes from './src/routes'
import connectToMongo from './src/databases/mongo'

connectToMongo()

const app = express()

app.use(express.json())
routes(app)

app.listen(3000, () => {
	console.log('Up and running!')
})

