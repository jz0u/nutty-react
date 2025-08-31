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

const app = express()
const PORT = process.env.PORT || 3000

app.use(cookieParser())
app.use(express.json())

app.get("/",cookieMiddleWare,(req,res)=>{
  res.status(200).sendFile(path.join(WEBAPP, "index.html"))
})

app.use(express.static(WEBAPP))

//routes
app.use(routes)

//SPA catch all goes last
app.get(/.*/, (req, res) => {
  res.status(200).sendFile(path.join(WEBAPP, "index.html"))

})
app.listen(PORT, () => {
  console.log(`\nlistening on http://localhost:${PORT}\n`)
})


