import { Router } from "express";
import { checkSchema, validationResult, matchedData } from "express-validator";
import { createUserQuery, createUserBody } from "../validationSchemas.js";
import users from "../mockDB/usersDB.js"
import resolveIndexByUserId from "../middleware/resolveIndexByUserId.js";
const router = Router();
router.get(
  "/",
  checkSchema(createUserQuery),
  (req, res) => {
    const { query: { filter, value } } = req
    if(!filter && !value){return res.send(users)}
    const result = validationResult(req)
    if (!result.isEmpty()) { return res.status(400).send({ errors: result.array() }) }
    const data = matchedData(req)
    return res.send(users.filter((x)=>(x[data.filter].includes(data.value))))

  })
router.post(
  "/",
  checkSchema(createUserBody),
  (req, res) => {
    const result = validationResult(req)
    if (!result.isEmpty()) { return res.status(400).send({ errors: result.array() }) }
    const data = matchedData(req)
    const newId = users[users.length - 1].id + 1
    const newUser = { id: newId, ...data }
    users.push(newUser)
    res.status(201).send(newUser)

  })


router.get("/:id", resolveIndexByUserId, (req, res) => {
  const { findUserIndex } = req
  const findUser = users[findUserIndex]
  if (!findUser) { return res.sendStatus(404) }
  res.status(200).send(findUser)
})

//put
router.put("/:id", resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req
  users[findUserIndex] = { id: users[findUserIndex].id, ...body }
  res.sendStatus(200)
})
//patch
router.patch("/:id", resolveIndexByUserId, (req, res) => {
  const { body, findUserIndex } = req
  users[findUserIndex] = { ...users[findUserIndex], ...body }
  res.sendStatus(200)
})
//delete
router.delete("/:id", resolveIndexByUserId, (req, res) => {
  users.splice(req.findUserIndex, 1)
  res.sendStatus(200)
})

export default router