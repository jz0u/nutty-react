import express from "express"
import dotenv from "dotenv"
dotenv.config()
import path from "path"
import { fileURLToPath } from "url"
import usersRouter from "./routes/users.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const WEBAPP = path.join(__dirname, "../../client/dist")

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.static(WEBAPP))

//middleware

//routes
app.use(usersRouter)

//healthcheck
app.get("/api", (req, res) => {
  res.sendStatus(200)
})
//SPA catch all goes last
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(WEBAPP, "index.html"))
})
app.listen(PORT, () => {
  console.log(`\nlistening on http://localhost:${PORT}\n`)
})


