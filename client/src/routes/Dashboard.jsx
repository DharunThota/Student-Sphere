import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import { UserContext } from '../context/UserContext'
import SubHeading from '../components/SubHeading';
import "../styles/Dashboard.css";

function Dashboard() {
	const {currentUser} = useContext(UserContext);
	let navigate = useNavigate();
	
	return (
		<>
			<Navbar />
			<Heading name={`Welcome, ${currentUser.fname} ${currentUser.lname}`} />
			<div className='main'>
				<div className='top'>
					<SubHeading name={currentUser.name} />
					<button className='btn btn-outline-secondary' onClick={() => navigate("/edit")}>Edit Club</button>
				</div>
			</div>
			
		</>
	)
}

export default Dashboard