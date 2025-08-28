import express from "express"
import dotenv from "dotenv"
dotenv.config()
import path from "path"
import { fileURLToPath } from "url"

//db
import users from "./users.js"
import { send } from "process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const reactDist = path.join(__dirname, "../client/dist")

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.static(reactDist))

//middleware
const resolveIndexByUserId = (req,res,next) => {
  const {params:{id}} = req
  const parsedId = parseInt(id)
  if(isNaN(parsedId)){return res.sendStatus(400)}
  const findUserIndex = users.findIndex(x=>x.id===parsedId)
  if(findUserIndex===-1){return res.sendStatus(404)}
  req.findUserIndex = findUserIndex
  next()
}

//get
app.get("/api", (req, res) => {
  res.sendStatus(200)
})
app.get("/api/users", (req, res) => {
  const { query: { filter, value } } = req
  if (filter && value) {
    return res.send(users.filter((x) => x[filter].includes(value)))
  }
  return res.send(users)
})

app.get("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id)
  if (isNaN(parsedId)) { return res.status(400).send({ msg: "Bad Request" }) }
  const findUser = users.find((x) => (x.id === parsedId))
  if (!findUser) { return res.status(404).send({ msg: "User Not Found" }) }
  return res.status(200).json(findUser)
})
//post
app.post("/api/users",(req,res)=>{
  const newId = users[users.length-1].id + 1
  const newUser = {id:newId, ...req.body}
  users.push(newUser)
  res.status(201).send(users)

})
//put
app.put("/api/users/:id",resolveIndexByUserId,(req,res)=>{
  const {body, findUserIndex} = req
  users[findUserIndex] = { id: users[findUserIndex].id, ...body}
  res.sendStatus(200)
})
//patch
app.patch("/api/users/:id",resolveIndexByUserId,(req,res)=>{
  const {body, findUserIndex} = req
  users[findUserIndex] = { ...users[findUserIndex], ...body}
  res.sendStatus(200)
})
//delete
app.delete("/api/users/:id",resolveIndexByUserId,(req,res)=>{
  users.splice(req.findUserIndex,1)
  res.sendStatus(200)
})
//SPA catch all goes last
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(reactDist, "index.html"))
})
app.listen(PORT, () => {
  console.log(`\nlistening on http://localhost:${PORT}\n`)
})


