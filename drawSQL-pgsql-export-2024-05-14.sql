CREATE TABLE "MEMBER_OF"(
    "club_id" INTEGER NOT NULL,
    "member_id" VARCHAR(10) NOT NULL,
    "position" VARCHAR(15) NOT NULL
);
ALTER TABLE
    "MEMBER_OF" ADD PRIMARY KEY("club_id");
CREATE TABLE "EVENT"(
    "event_id" bigserial NOT NULL,
    "club_id" INTEGER NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME(0) WITHOUT TIME ZONE NOT NULL,
    "venue" VARCHAR(20) NOT NULL,
    "status" VARCHAR(10) NOT NULL
);
ALTER TABLE
    "EVENT" ADD PRIMARY KEY("event_id");
CREATE TABLE "STUDENT"(
    "student_id" VARCHAR(10) NOT NULL,
    "Fname" VARCHAR(20) NOT NULL,
    "Lname" VARCHAR(20) NOT NULL,
    "age" INTEGER NOT NULL
);
ALTER TABLE
    "STUDENT" ADD PRIMARY KEY("student_id");
CREATE TABLE "PIC"(
    "pic_id" SERIAL NOT NULL,
    "Fname" VARCHAR(20) NOT NULL,
    "Lname" VARCHAR(20) NOT NULL,
    "club_id" INTEGER NOT NULL,
    "email" VARCHAR(40) NOT NULL
);
ALTER TABLE
    "PIC" ADD PRIMARY KEY("pic_id");
CREATE TABLE "REQUEST"(
    "perm_id" bigserial NOT NULL,
    "club_id" INTEGER NOT NULL,
    "pic" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" VARCHAR(15) NOT NULL,
    "req_status" VARCHAR(20) NOT NULL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "REQUEST" ADD PRIMARY KEY("perm_id");
CREATE TABLE "CLUB"(
    "club_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "description" TEXT NOT NULL,
    "lead" VARCHAR(10) NOT NULL,
    "pic" INTEGER NOT NULL,
    "room_no" VARCHAR(10) NOT NULL
);
ALTER TABLE
    "CLUB" ADD PRIMARY KEY("club_id");
CREATE TABLE "ANNOUNCEMENT"(
    "id" bigserial NOT NULL,
    "club_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "ANNOUNCEMENT" ADD PRIMARY KEY("id");
ALTER TABLE
    "ANNOUNCEMENT" ADD CONSTRAINT "announcement_club_id_foreign" FOREIGN KEY("club_id") REFERENCES "CLUB"("club_id");
ALTER TABLE
    "CLUB" ADD CONSTRAINT "club_pic_foreign" FOREIGN KEY("pic") REFERENCES "PIC"("pic_id");
ALTER TABLE
    "PIC" ADD CONSTRAINT "pic_club_id_foreign" FOREIGN KEY("club_id") REFERENCES "CLUB"("club_id");
ALTER TABLE
    "MEMBER_OF" ADD CONSTRAINT "member_of_club_id_foreign" FOREIGN KEY("club_id") REFERENCES "CLUB"("club_id");
ALTER TABLE
    "REQUEST" ADD CONSTRAINT "request_pic_foreign" FOREIGN KEY("pic") REFERENCES "PIC"("pic_id");
ALTER TABLE
    "MEMBER_OF" ADD CONSTRAINT "member_of_member_id_foreign" FOREIGN KEY("member_id") REFERENCES "STUDENT"("student_id");
ALTER TABLE
    "CLUB" ADD CONSTRAINT "club_lead_foreign" FOREIGN KEY("lead") REFERENCES "STUDENT"("student_id");
ALTER TABLE
    "EVENT" ADD CONSTRAINT "event_club_id_foreign" FOREIGN KEY("club_id") REFERENCES "CLUB"("club_id");
ALTER TABLE
    "REQUEST" ADD CONSTRAINT "request_club_id_foreign" FOREIGN KEY("club_id") REFERENCES "CLUB"("club_id");