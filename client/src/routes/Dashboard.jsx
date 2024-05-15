import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import { UserContext } from '../context/UserContext'
import SubHeading from '../components/SubHeading';
import Members from '../components/Members';
import "../styles/Dashboard.css";

function Dashboard() {
	const {currentUser} = useContext(UserContext);
	const [showMembers, setShowMembers] = useState(false);
	const [showEvents, setShowEvents] = useState(false);
	const [showAnnouncements, setShowAnnouncements] = useState(false);
	let navigate = useNavigate();

	function handleMembers() {
		setShowMembers(!showMembers);
		setShowEvents(false);
		setShowAnnouncements(false);
	}

	function handleEvents() {
		setShowEvents(!showEvents);
		setShowMembers(false);
		setShowAnnouncements(false);
	}

	function handleAnnouncements() {
		setShowAnnouncements(!showAnnouncements);
		setShowMembers(false);
		setShowEvents(false);
	}

	
	return (
		<>
			<Navbar />
			<Heading name={`Welcome, ${currentUser.fname} ${currentUser.lname}`} />
			<div className='main'>
				<div className='top'>
					<SubHeading name={currentUser.name} />
					<button className='btn btn-outline-secondary' onClick={() => navigate("/edit")}>Edit Club</button>
				</div>
				<div className='options'>
					<div className='option' onClick={handleMembers}>{"Members >"}</div>
					{showMembers && <Members />}
					<div className='option' onClick={handleEvents}>{"Events >"}</div>
					<div className='option' onClick={handleAnnouncements}>{"Announcements >"}</div>
				</div>
			</div>
			
		</>
	)
}

export default Dashboard