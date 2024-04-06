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

/*CLUB */
//get all clubs
app.get("/api/v1/clubs", async (req, res) => {
    try {
        const result = db.query("select * from club");
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//get technical/cultural clubs
app.get("/api/v1/clubs/:type", async (req, res) => {
    try {
        const result = db.query("select * from club where type=$1", [req.params.type]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//get club info
app.get("/api/v1/clubs/:id", async (req, res) => {
    try {
        const result = db.query("select * from club where club_id=$1", [req,params.id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//update club info
app.put("/api/v1/clubs/:id", async (req, res) => {
    try {
        const result = db.query("update club set name=$1, type=$2, description=$3, lead=$4, pic=$5, room_no=$6 where club_id=$7 returning *",
            [req.body.name, req.body.type, req.body.description, req.body.lead, req.body.pic, req.body.room_no, req.params.id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//add members
app.post("/api/v1/clubs/:id/members", async (req, res) => {
    try {
        const result = db.query("select * from club");
        res.status(200).json(result.rows);
    } catch (error) { 
        console.log(error);
    }
});

//remove members


//update position


/*ANNOUNCEMENTS */
//get all announcements
app.get("api/v1/announcements", async (req, res) => {
    try {
        const result = await db.query("select * from announcement;");
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//post an announcement
app.post("api/v1/announcements", async (req, res) => {
    try {
        const result = await db.query("insert into events(club_id, description, date, title) values($1,$2,$3,$4) returning *;", 
            [req.body.club_id, req.body.description, req.body.date, req.body.title]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//edit an announcement
app.put("api/v1/announcemets/:id", async(req, res) => {
    try {
        const result = await db.query("update announcement set club_id=$1, description=$2, date=$3, title=$4 where id=$5", 
            [req.body.club_id, req.body.description, req.body.date, req.body.title, req.params.id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//delete an announcement
app.delete("api/v1/announcements/:id", async (req, res) => {
    try {
        const result = await db.query("delete from announcement where id=$1 returning *", [req.params.id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
})


/*EVENTS */
// get upcoming/ongoing/completed events
app.get("/api/v1/events/:status", async (req, res) => {
    try {
        const result = await db.query("select * from events where status = $1;", [req.params.status]);
        //console.log(result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error)
    }
});

//post an event
app.post("api/v1/events", async (req, res) => {
    try{
        const result = await db.query("insert into events(club_id, type, description, date, time, venue, status, title) values($1,$2,$3,$4,$5,$6,$7,$8) returning *;",
            [req.body.club_id, req.body.type, req.body.description, req.body.date, req.body.time, req.body.venue, req.body.status, req.body.title]
        );
        res.status(200).json(result.rows);
    } catch(error) {
        console.log(error);
    }
});

//update event
app.put("api/v1/events/:id", async (req, res) => {
    try {
        const result = await db.query("update event set club_id=$1, type=$2, description=$3, date=$4, time=$5, venue=$6, status=$7, title=$8 where event_id=$9 returning *",
            [req.body.club_id, req.body.type, req.body.description, req.body.date, req.body.time, req.body.venue, req.body.status, req.body.title, req.params.id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
})

//delete event
app.delete("api/v1/events/:id", async (req, res) => {
    try {
        const result = await db.query("delete from event where id=$1 returning *", [req.params.id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});