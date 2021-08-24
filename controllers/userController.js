// controller file for user

import User from '../models/user.js'

let users = []

export const createUser = (req, res) => {
  const {name, password, role} = req.body
  let index = 1

  if (users.length > 0)
    index = users[users.length-1].getId+1

  const user = new User(index, name, password, role)

  users.push(user)

  res.status(201).json(user)
}

export const getUsers = (req, res) => {
  res.status(200).json(users)
}

export const getUser = (req, res) => {
  const id = req.params.id
  const user = users.find(singleUser => Number(singleUser.getId) === Number(id))

  if (user)
    res.status(200).json(user)

  res.status(200).json({message: "Any user found"})
}

export const updateUser = (req, res) => {
  const id = req.params.id
  const {bestScore, pieces} = req.body

  const user = users.find(singleUser => Number(singleUser.getId) === Number(id))

  if (user) {
    if (bestScore) {
      user.setBestScore(bestScore.level, bestScore.score)
    }

    if (pieces) {
      user.addPieces(pieces)
    }

    res.status(200).json({message: "the update process finished"})
  }

  res.status(200).json({message: "Any user found"})
}

export const deleteUser = (req, res) => {
  const id = req.params.id
  const newUsers = users.filter(user => Number(user.getId) !== Number(id))

  users = newUsers

  res.status(200).json({message: "successful delete an user"})
}
