import express from 'express'
import bodyParser from 'body-parser'
import User from './models/user.js'
import userRoute from './routes/user.js'

const PORT = process.env.PORT || 5000

const app = express()

app.use(bodyParser.json())
app.use("/api/users", userRoute)

app.listen(PORT, () => console.log(`server running on link localhost:${PORT}`))
