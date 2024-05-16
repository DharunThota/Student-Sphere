import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { Modal, Button } from 'react-bootstrap';

function ClubAnnouncements() {
    const {currentUser, privilege} = useContext(UserContext)
    const [announcements, setAnnouncements] = useState([])
    const [date, setDate] = useState('')
    const [about, setAbout] = useState('')
    const [show, setShow] = useState(false);
    const [isAdd, setIsAdd] = useState(true)
    const [id, setId] = useState('')

    useEffect(() => {
        async function fetchAnnouncements() {
            try {
                const response = await axios.get(`http://localhost:3000/clubs/${currentUser.club_id}/announcements`)
                setAnnouncements(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAnnouncements();
    }, [announcements]);

    function handleAddShow(){
        setShow(true);
        setIsAdd(true)
        setDate("")
        setAbout("")
    } 

    function handleEditShow(announcement){
        setShow(true);
        setIsAdd(false)
        setId(announcement.id)
        setDate(announcement.date)
        setAbout(announcement.about)
    } 
    const handleClose = () => setShow(false);  

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/announcements`, {date, about, club_id: currentUser.club_id})
            setDate('')
            setAbout('')
            setShow(false)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleUpdate(event){
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/announcements/${id}`, {date, about})
            setId('')
            setDate('')
            setAbout('')
            setShow(false)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDelete(id){
        try {
            const response = await axios.delete(`http://localhost:3000/announcements/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='top'>
                <h3>Announcements</h3>
                {privilege > 1 && <button className="btn btn-primary" onClick={handleAddShow}>Add Announcement</button>}
            </div>
            {announcements && announcements.map((announcement) => {
                return (
                    <div className="card" key={announcement.id}>
                        <div className="card-body">
                            <h5 className="card-title">{announcement.about}</h5>
                            {privilege > 1 && <div className='buttons'>
                                <button className="btn btn-secondary" onClick={() => handleEditShow(announcement)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(announcement.id)}>Delete </button>
                            </div>}
                        </div>
                    </div>
                )
            })}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isAdd ? "Add" : "Edit"} announcement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="date">Date</label>
                                <input value={date} onChange={(e) => setDate(e.target.value)} type="text" className="form-control" placeholder="Date"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-11">
                                <label htmlFor="about">About</label>
                                <textarea value={about} onChange={(e) => setAbout(e.target.value)} type="text" className="form-control" placeholder="About"/>
                            </div>
                        </div> 
                    </form>    
                </Modal.Body>
                <Modal.Footer>
                    {isAdd ? <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button> : <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>}  
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ClubAnnouncements