// routes declaration

import express from 'express'
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js'

const route = express.Router()

route.get("/", getUsers)

route.get("/:id", getUser)

route.post("/", createUser)

route.patch("/:id", updateUser)

route.delete("/:id", deleteUser)

export default route
