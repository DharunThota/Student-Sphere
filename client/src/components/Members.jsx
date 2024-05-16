import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext'

function Members() {
    const {currentUser, privilege} = useContext(UserContext)
    const [members, setMembers] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/clubs/${currentUser.club_id}/members`)
                console.log(response.data)
                setMembers(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    return (
        <div className="list-group">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Student ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Position</th>
                            {privilege === 3 && <th scope="col">Edit</th>}
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
                                    {privilege === 3 && <td><button className="btn btn-warning">Update</button></td>}
                                    {privilege === 3 && <td><button className="btn btn-danger">Delete</button></td>}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        
    )
}

export default Members