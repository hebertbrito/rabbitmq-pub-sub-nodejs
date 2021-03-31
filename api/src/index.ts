import express from 'express';
import routermq from './routers/rabbitmq-router'
let app = express()
app.use(express.json())
app.use(routermq)

const PORT = process.env.PORT || 3001

app.get('/teste', async (req, resp)=>{
    try {
        resp.status(200).json("Ok")
    } catch (error) {
        resp.status(501);
    }
})

app.listen(PORT, ()=>{
    console.log("project runing on port " + PORT)
})