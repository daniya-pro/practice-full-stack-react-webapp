import express from 'express'
import database from './database.js'
import routes from './routes/index.js'
import cors from 'cors' 
import bodyParser from 'body-parser'
database()

const app=express()
app.use(cors())
app.use(bodyParser.json())

app.use("/book-store",routes)

const port=process.env.PORT||3002
app.listen(port,()=>{console.log("server connected on",port)})