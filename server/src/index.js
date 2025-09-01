import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cookieParser from "cookie-parser"
import path from "path"
import { fileURLToPath } from "url"
import routes from "../src/routes/controller.js"
import cookieMiddleWare from "./middleware/cookieMiddleware.js"
const __dirname = path.dirname((fileURLToPath(import.meta.url)))
const WEBAPP = path.join(__dirname, "../../client/dist")
import session from "express-session"
import users from "../src/mockDB/usersDB.js"
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser("helloworld"))//before any cookies
app.use(
  session({
    secret:"very secretive secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60
    }
  })) //session before any endpoints

app.post("/api/auth",(req,res)=>{
  const {body:{ username, password}} = req
  const findUser = users.find((x) => (x.username === username))
  if(!findUser || findUser.password !== password){return res.status(401).send({msg:"Bad Credentials"})}
  req.session.user = findUser;
  return res.status(200).send(findUser)
})
app.get("/api/auth/status",(req,res)=>{
  return req.session.user ? res.status(200).send(req.session.user):res.status(401).send({msg:"Not Authenticated"})
})

app.use(express.static(WEBAPP))//cookies before static

//routes
app.use(routes)

//SPA catch all goes last
app.get(/.*/, (req, res) => {
  res.status(200).sendFile(path.join(WEBAPP, "index.html"))

})
app.listen(PORT, () => {
  console.log(`\nlistening on http://localhost:${PORT}\n`)
})


