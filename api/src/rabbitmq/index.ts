import rabbitMQ, { Channel, connect, Connection } from 'amqplib'

export class RabbitMQ {
    public connection: Connection
    public channel: Channel
    private readonly uri: string

    constructor(uri: string) {
        this.uri = uri
    }

    async start(): Promise<void> {
        this.connection = await connect({
            port: 5672,
            hostname: 'localhost',
            username: 'admin',
            password: 'admin',
            frameMax: 0,
            heartbeat: 0,
            vhost: '/'
        })
    }

    async startchannel(): Promise<void> {
        this.channel = await this.connection.createChannel()
    }

}
