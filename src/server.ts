import createApp from "./app"

const app = createApp()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`🎃 Server is running at port http://localhost:${port}`)
})