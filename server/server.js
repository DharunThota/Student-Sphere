import "dotenv/config";
import Express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const db = new pg.Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

db.connect();

const app = Express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});