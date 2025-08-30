import users from "../users.js"

const resolveIndexByUserId = (req, res, next) => {
  const { params: { id } } = req
  const parsedId = parseInt(id)
  if (isNaN(parsedId)) { return res.sendStatus(400) }
  const findUserIndex = users.findIndex(x => x.id === parsedId)
  if (findUserIndex === -1) { return res.sendStatus(404) }
  req.findUserIndex = findUserIndex
  next()
}
export default resolveIndexByUserId