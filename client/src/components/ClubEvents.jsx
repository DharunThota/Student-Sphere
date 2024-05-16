import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { Modal, Button } from 'react-bootstrap';

function ClubEvents() {
    const {currentUser, privilege} = useContext(UserContext)
    const [events, setEvents] = useState([])
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [venue, setVenue] = useState('')
    const [about, setAbout] = useState('')
    const [show, setShow] = useState(false);
    const [isAdd, setIsAdd] = useState(true)
    const [id, setId] = useState('')

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await axios.get(`http://localhost:3000/clubs/${currentUser.club_id}/events`)
                setEvents(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchEvents();
    }, [events]);

    function handleAddShow(event){
        setShow(true);
        setIsAdd(true)
        setTitle("")
        setType("")
        setDate("")
        setTime("")
        setVenue("")
        setAbout("")
    } 

    function handleEditShow(event){
        setShow(true);
        setIsAdd(false)
        setId(event.event_id)
        setTitle(event.title)
        setType(event.type)
        setDate(event.date)
        setTime(event.time)
        setVenue(event.venue)
        setAbout(event.about)
    } 
    const handleClose = () => setShow(false);  

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/events`, {title, type, date, time, venue, about, club_id: currentUser.club_id})
            setTitle('')
            setType('')
            setDate('')
            setTime('')
            setVenue('')
            setAbout('')
            setShow(false)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleUpdate(event){
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/events/${id}`, {title, type, date, time, venue, about})
            setId('')
            setTitle('')
            setType('')
            setDate('')
            setTime('')
            setVenue('')
            setAbout('')
            setShow(false)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleStatus(id, status){
        try {
            const response = await axios.patch(`http://localhost:3000/events/${id}`, {status})
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDelete(id){
        try {
            const response = await axios.delete(`http://localhost:3000/events/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='top'>
                <h3>Events</h3>
                {privilege > 1 && <button className="btn btn-primary" onClick={handleAddShow}>Add Event</button>}
            </div>
            {events && events.map((event) => {
                return (
                    <div className="card" key={event.event_id}>
                        <div className="card-body">
                            <h5 className="card-title">{event.title} ({event.status})</h5>
                            {privilege > 1 && <div className='buttons'>
                                {event.status !== 'Completed' && <button className="btn btn-secondary" onClick={() => handleEditShow(event)}>Edit</button>}
                                {event.status === 'Ongoing' && <button className="btn btn-success" onClick={() => handleStatus(event.event_id, "Completed")}>Finish</button>}
                                {event.status === 'Upcoming' && <button className="btn btn-success" onClick={() => handleStatus(event.event_id, "Ongoing")}>Start</button>}
                                <button className="btn btn-danger" onClick={() => handleDelete(event.event_id)}>Delete </button>
                            </div>}
                        </div>
                    </div>
                )
            })}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isAdd ? "Add" : "Edit"} Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <label htmlFor="title">Title</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Title"/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="type">Type</label>
                                <input value={type} onChange={(e) => setType(e.target.value)} type="text" className="form-control" placeholder="Type"/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="date">Date</label>
                                <input value={date} onChange={(e) => setDate(e.target.value)} type="text" className="form-control" placeholder="Date"/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="time">Time</label>
                                <input value={time} onChange={(e) => setTime(e.target.value)} type="text" className="form-control" placeholder="Time"/>
                            </div>
                            <div className="col mb-3">
                                <label htmlFor="venue">Venue</label>
                                <input value={venue} onChange={(e) => setVenue(e.target.value)} type="text" className="form-control" placeholder="Venue"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-11 mb-3">
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

export default ClubEvents