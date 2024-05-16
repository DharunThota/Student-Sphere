import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import { Modal, Button } from 'react-bootstrap'

function Members() {
    const {currentUser, privilege} = useContext(UserContext)
    const [members, setMembers] = useState([])
    const [studentId, setStudentId] = useState('')
    const [age, setAge] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/clubs/${currentUser.club_id}/members`)
                setMembers(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [members])

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/clubs/${currentUser.club_id}/members`, {studentId, age, fname, lname, email, position})
            setShow(false)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDelete(student_id){
        try {
            const response = await axios.delete(`http://localhost:3000/clubs/${currentUser.club_id}/members/${student_id}`)
        } catch (error) {
            console.log(error)
        }
    }

    function handleShow(){
        setShow(true)
        setStudentId('')
        setAge('')
        setFname('')
        setLname('')
        setEmail('')
        setPosition('')
    }
    const handleClose = () => setShow(false);  

    return (
        <>
            <div className='top'>
                <h3>Members</h3>
                {privilege === 3 && <button className="btn btn-primary" onClick={handleShow}>Add Member</button>}
            </div>
            <div className="list-group">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Student ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Position</th>
                            {privilege === 3 && <th scope="col">Remove</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {members && 
                        members.map((member) => {
                            return (
                                <tr>
                                    <td>{member.student_id}</td>
                                    <td>{member.fname} {member.lname}</td>
                                    <td>{member.age}</td>
                                    <td>{member.position}</td>
                                    {(privilege === 3 && member.position !== 'lead') ? <td><button className="btn btn-danger" onClick={() => handleDelete(member.student_id)}>Delete</button></td> : <td></td>}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <label htmlFor="student id">Student ID</label>
                                <input value={studentId} onChange={(e) => setStudentId(e.target.value)} type="text" className="form-control" placeholder="Student ID"/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="position">Position</label>
                                <input value={position} onChange={(e) => setPosition(e.target.value)} type="text" className="form-control" placeholder="Positon"/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="fname">First Name</label>
                                <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="lname">Last Name</label>
                                <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="age">Age</label>
                                <input value={age} onChange={(e) => setAge(e.target.value)} type="text" className="form-control" placeholder="Age"/>
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email"/>
                            </div>
                        </div>
                    </form>    
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add</button>  
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        
        
    )
}

export default Members