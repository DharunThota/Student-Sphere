import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import "../styles/Edit.css";

function EditClub(props){
    const {currentUser} = useContext(UserContext);
    const [clubName, setClubName] = useState(props.name);
    const [type, setType] = useState(props.type);
    const [roomNo, setRoomNo] = useState(props.room_no);
    const [desc, setDesc] = useState(props.desc);
    let navigate = useNavigate();

	useEffect(() => {
		async function fetchClub() {
			try {
				const response = await axios.get(`http://localhost:3000/api/v1/clubs/${currentUser.club_id}`);
				console.log(response.data);
                setClubName(response.data[0].name);
                setType(response.data[0].type);
                setRoomNo(response.data[0].room_no);
                setDesc(response.data[0].description);
			} catch (error) {
				console.log(error);
			}
		}
		fetchClub();
	}, []);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/clubs/${currentUser.club_id}`, {
                name: clubName,
                type: type,
                room_no: roomNo,
                desc: desc
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="form-container">
            <h2>Edit Club Information</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="clubName">Club Name:</label>
                <input type="text" className="form-control" id="clubName" name="clubName"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="roomNumber">Room Number:</label>
                <input type="text" className="form-control" id="roomNumber" name="roomNumber"
                value={roomNo}
                onChange={(e) => setRoomNo(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label for="clubType">Club Type:</label>
                <input type="text" className="form-control" id="clubType" name="clubType"
                value={type}
                onChange={(e) => setType(e.target.value)} />
            </div>
            <div className="form-group">
                <label for="clubDescription">Club Description:</label>
                <textarea className="form-control" id="clubDescription" name="clubDescription" rows="4" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-secondary" onClick={() => navigate("/dashboard")}>Cancel</button>
            </form>
        </div>
    )
}

export default EditClub;