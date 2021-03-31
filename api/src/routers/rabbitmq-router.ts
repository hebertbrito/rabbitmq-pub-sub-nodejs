import express from 'express'
import {RabbitMQ} from '../rabbitmq/'
const routermq = express.Router();

routermq.post('/mqexpress', async function(req, resp){
    try {
        const server = new RabbitMQ('amqp://admin:admin:5672')
        await server.start()
        await server.startchannel()
        resp.json(req.body)
    } catch (error) {
        resp.status(501).json("error")
    }
})

export default routermq