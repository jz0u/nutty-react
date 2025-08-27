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
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.static(reactDist))

//endpoints
app.get("/api", (req, res) => {
  res.sendStatus(200)
})
app.get("/api/users", (req, res) => {
 const {query:{filter,value}} = req
 if(!filter||!value){return res.send(users)}
 res.send(
  users.filter((x)=>x[filter].includes(value))
)
})
app.get("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id)
  if(isNaN(parsedId)){return res.status(400).send({msg: "Bad Request"})}
  const findUser = users.find((x)=>(x.id === parsedId))
  if(!findUser){return res.status(404).send({msg:"User Not Found"})}
  return res.status(200).json(findUser)
})
//SPA catch all goes last
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(reactDist, "index.html"))
})
app.listen(PORT, () => {
  console.log(`\nlistening on http://localhost:${PORT}\n`)
})


