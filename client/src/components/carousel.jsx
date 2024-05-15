
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';
function Carouselcomp(props){
  return (
          <Carousel controls={props.mediaList.length > 1} indicators={false} onClick={(e) => e.stopPropagation()}>
              {props.mediaList.map((media) => {
                  return(
                      <Carousel.Item>
                          {media.type === "gifv" || media.type === "video" ? 
                              <video controls preload="true" className="statusMedia">
                                  <source src={media.url} type="video/mp4"/>
                              </video>
                          :
                              <img className="statusMedia" src={media.url} alt="" />
                          }
                      </Carousel.Item>
                  )
              })}
          </Carousel>
  );
}

export default Carouselcomp;