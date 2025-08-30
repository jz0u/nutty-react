import dotenv from "dotenv"
dotenv.config()
import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import routes from "../src/routes/controller.js"

const __dirname = path.dirname((fileURLToPath(import.meta.url)))
const WEBAPP = path.join(__dirname, "../../client/dist")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(WEBAPP))
app.use(express.json())

//routes
app.use(routes)

//SPA catch all goes last
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(WEBAPP, "index.html"))
})
app.listen(PORT, () => {
  console.log(`\nlistening on http://localhost:${PORT}\n`)
})


