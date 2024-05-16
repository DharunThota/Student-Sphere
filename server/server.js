import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";

const db = new pg.Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

db.connect();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/login", async(req, res) => {
    try {
        const result = await db.query("select * from login where username=$1", [req.body.username])
        const password = result.rows[0].password
        if(password === req.body.password){
            //res.json(result.rows[0])
            const student = await db.query("select fname, lname, student_id, c.club_id as club_id, name from student s join member_of m on m.member_id = s.student_id join club c on c.club_id=m.club_id where student_id = $1", [req.body.username]);
            console.log(student.rows[0]);
            res.json(student.rows[0]);
        } else {
            console.log("wrong");
        }
    } catch (error) {
        console.log(error)
    }
})

/*CLUB */
//get all clubs
app.get("/clubs", async(req, res) => {
    try {
        const result = await db.query("SELECT * FROM club");
        //console.log(result.rows);
        res.json(result.rows)
    } catch (error) {
        console.log(error);
    }
})

app.get("/clubs/:type", async(req, res) => {
    try {
        const result = await db.query("SELECT * FROM club WHERE type=$1", [req.params.type]);
        //console.log(result.rows);
        res.json(result.rows)
    } catch (error) {
        console.log(error);
    }
})

app.get("/api/v1/clubs/:id", async(req, res) => {
    try {
        const result = await db.query("select name, s.fname as lead_fname, s.lname as lead_lname, p.fname as pic_fname, p.lname as pic_lname, room_no, description, type from club c join pic p on p.pic_id=c.pic join student s on s.student_id=c.lead where c.club_id=$1", [req.params.id]);
        //console.log(result.rows);
        res.json(result.rows)
    } catch (error) {
        console.log(error);
    }
})

//update club info
app.put("/clubs/:id", async (req, res) => {
    try {
        const result = db.query("update club set name=$1, type=$2, description=$3, room_no=$4 where club_id=$5 returning *",
            [req.body.name, req.body.type, req.body.desc, req.body.room_no, req.params.id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//get events from a club
app.get("/clubs/:id/events", async(req, res) => {
    try {
        const result = await db.query("select * from event where club_id=$1 order by status desc", [req.params.id]);
        //console.log(result.rows)
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
})

//get members
app.get("/clubs/:id/members", async(req, res) => {
    try {
        //console.log(req.params.id);
        const result = await db.query("select student_id, fname, lname, age, position from student s join member_of m on m.member_id=s.student_id where m.club_id=$1", [req.params.id])
        //console.log(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.log(error)
    }
})

//add members

//remove members


//update position


/*ANNOUNCEMENTS */
//get all announcements
app.get("/announcements", async (req, res) => {
    try {
        const result = await db.query("select id, name, about from announcement a join club c on a.club_id=c.club_id");
        //console.log(result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//post an announcement
app.post("/announcements", async (req, res) => {
    try {
        const result = await db.query("insert into events(club_id, description, date, title) values($1,$2,$3,$4) returning *", 
            [req.body.club_id, req.body.description, req.body.date, req.body.title]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
});

//edit an announcement
app.put("/announcemets/:id", async(req, res) => {
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
app.delete("/announcements/:id", async (req, res) => {
    try {
        const result = await db.query("delete from announcement where id=$1 returning *", [req.params.id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
})


/*EVENTS */
// get upcoming/ongoing/completed events
app.get("/events/:status", async (req, res) => {
    //console.log(req.params.status)
    try {
        const result = await db.query("select event_id, name, date, time, venue, title from event e join club c on e.club_id=c.club_id where status = $1", [req.params.status]);
        //console.log(result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error)
    }
});

//get particular event info
app.get("/api/v1/events/:id", async(req, res) => {
    try {
        const result = await db.query("select name, date, time, venue, title, about from event e join club c on e.club_id=c.club_id where event_id = $1", [req.params.id]);
        //console.log(result.rows);
        res.json(result.rows);
    } catch (error) {
        console.log(error)
    }
})

//post an event
app.post("/events", async (req, res) => {
    try{
        //console.log(req.body)
        const result = await db.query("insert into event(club_id, type, about, date, time, venue, status, title) values($1,$2,$3,$4,$5,$6,'Upcoming',$7) returning *;",
            [req.body.club_id, req.body.type, req.body.about, req.body.date, req.body.time, req.body.venue, req.body.title]
        );
        res.status(200).json(result.rows);
    } catch(error) {
        console.log(error);
    }
});

//update event
app.put("/events/:id", async (req, res) => {
    try {
        //console.log(req.body)
        const result = await db.query("update event set type=$1, about=$2, date=$3, time=$4, venue=$5, title=$6 where event_id=$7 returning *",
            [req.body.type, req.body.about, req.body.date, req.body.time, req.body.venue, req.body.title, req.params.id]
        );
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
})

//change status of an event
app.patch("/events/:id", async(req, res) => {
    try {
        const result = await db.query("update event set status=$1 where event_id=$2", [req.body.status, req.params.id])
        console.log(result.rows)
    } catch (error) {
        console.log(error)
    }
})

//delete event
app.delete("/events/:id", async (req, res) => {
    try {
        console.log("deleted", req.params.id)
        const result = await db.query("delete from event where event_id=$1 returning *", [req.params.id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})