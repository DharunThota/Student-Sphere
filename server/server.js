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

app.get("/api/v1/events/:status", async (req, res) => {
    try {
        const result = await db.query("select * from events where status = $1", [req.params.status]);
        //console.log(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.log(error)
    }
});

app.post("api/v1/events", async (req, res) => {
    try{
        const result = await db.query("insert into events(club_id, type, description, date, time, venue, status) values()")
    } catch(error) {
        console.log(error);
    }
})

app.get()

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});