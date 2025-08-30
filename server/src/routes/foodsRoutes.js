import { Router } from "express";
const router = Router()
import { checkSchema, validationResult,matchedData } from "express-validator";
import { createFoodQuery } from "../validationSchemas.js";
import foods from "../mockDB/foodsDB.js"

router.get(
    "/",
    checkSchema(createFoodQuery),
    (req, res) => {
        const { query: { filter, value } } = req
        if (!filter && !value) { return res.send(foods) }
        const result = validationResult(req)
        if (!result.isEmpty()) { return res.send({ errors: result.array() }) }
        const data = matchedData(req)
        return res.send(foods.filter((x) => (x[data.filter].includes(data.value))))
    })

router.post("/", (req, res) => { res.sendStatus(200) })

export default router