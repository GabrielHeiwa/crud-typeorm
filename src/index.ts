import "reflect-metadata"
import express from "express"
import routes from "./routes"
import { createConnection } from 'typeorm'
import cors from 'cors';

const app = express()

createConnection();

app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333)