import express from "express"
import router from "./routes"
import cors from "cors"

function createApp() {
    const app = express()
    
    const corsOptions = {
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, 
    }

    app.use(express.json())

    app.use(cors(corsOptions));

    app.use ("/api/todos", router)

    return app
}

export default createApp