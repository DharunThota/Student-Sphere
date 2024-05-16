import './Section.css'
import { useNavigate } from 'react-router-dom';
function Section(props){
    const navigate = useNavigate();
    
    function navigatefunc(){
        if(props.title==='Clubs'){
            navigate('/clubs');
        }else if(props.title==='Announcements'){
            navigate('/announcements');
        }else if(props.title==='Events'){
            navigate('/events');
        }
    }

    function handleClick(item){
        if(props.title==='Clubs'){
            navigate(`/clubs/${item.club_id}`);
        }else if(props.title==='Announcements'){
            navigate(`/announcements`);
        }else if(props.title==='Events'){
            navigate(`/events/${item.event_id}`);
        }
    }

    return (
        <div style={{backgroundColor: props.bcolor}} className="section">
            <div className='headdiv'>
                <h1 style={{color:props.hcolor}}className="head">{props.title}</h1>
                <span style={{color:props.hcolor}}className='sech' onClick={navigatefunc}>View all </span>
            </div>
            <hr className='hori'/>
            <div className="List">
                {props.card.map((item, index) => {
                    if(index > 2){
                        return null;
                    }
                    return(
                        <div className="Card" onClick={() => handleClick(item)}>
                            {props.title !== "Announcements" && <img className="image" src="https://picsum.photos/220" alt=""/>}
                            <h2 className="cardHead" >{item.name || item.title}</h2>
                            <p className="cardDesc" >{item.description || item.about}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Section;