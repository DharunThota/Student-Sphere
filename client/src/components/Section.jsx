import './Section.css'
import { useNavigate } from 'react-router-dom';
function Section(props){
    const navigate = useNavigate();
    const navigatefunc=()=>{
        if(props.title==='Clubs'){
            navigate('/clubs');
        }
        else if(props.title==='Announcements'){
            navigate('/announcements');
        }
        else if(props.title==='Events'){
            navigate('/events');
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
                {props.card.map((item) => {
                    return(
                        <div className="Card">
                            {props.title !== "Announcements" && <img className="image" src="https://picsum.photos/220" alt={item.alt}/>}
                            <h2 className="cardHead" >{item.name}</h2>
                            <p className="cardDesc" >{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Section;