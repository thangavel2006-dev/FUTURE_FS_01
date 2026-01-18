import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.static("public"))

mongoose.connect(process.env.MONGO_URI)

const Message = mongoose.model("Message", {
  name: String,
  email: String,
  message: String
})

app.post("/contact", async (req, res) => {
  await Message.create(req.body)
  res.json({ success: true })
})

app.listen(process.env.PORT)
