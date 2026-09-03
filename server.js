const app = require("./app");
const connectDb = require("./src/config/db");
require('dotenv').config()
const port=process.env.PORT || 3000


const start=()=>{
    try {
        app.listen(port,()=>{
    console.log(`server is running 
        http://localhost:${port}`)
        connectDb()
})
    } catch (error) {
        console.log(error.message)
        process.emit()
    }
}

start()