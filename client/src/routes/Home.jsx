// import React from "react";
// import '../styles/Home.css';
// import Navbar from "../components/Navbar";

// function Home() {
//     return (
//         <div className="homePage">
//             <Navbar />
//             <div id="carouselExampleCaptions" class="cont carousel slide carousel-fade" data-bs-ride="carousel">
//               <div class="carousel-indicators d-none">
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//               </div>
//               <div class="carousel-inner">
//                 <div class="carousel-item active image" data-bs-interval='4000'>
//                   <img src="https://images.hellomagazine.com/horizon/landscape/e7a91ee737a6-scarlett-johansson-pink-dress.jpg?tx=c_limit,w_960" class="i d-block w-100" alt="FIRST"/>
//                   <div class="carousel-caption d-none d-md-block">
//                     <h5>First </h5>
//                   </div>
//                 </div>
//                 <div class="carousel-item image " data-bs-interval='4000'>
//                   <img src="https://www.byrdie.com/thmb/hOTeUiExvppmw_bGY1mxdfPfcEU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/angelinajoliecloudnails-d6b590cfef504bb2af12b1f9e9f1bb00.png" class="i d-block w-100" alt="SECOND"/>
//                   <div class="carousel-caption d-none d-md-block">
//                     <h5>Second</h5>
//                   </div>
//                 </div>
//                 <div class="carousel-item image " data-bs-interval='4000'>
//                   <img src="https://s.abcnews.com/images/US/emma-stone-ap-hb-180814_hpMain_16x9_992.jpg?w=992" class="i d-block w-100" alt="THIRD"/>
//                   <div class="carousel-caption d-none d-md-block">
//                     <h5>Third</h5>
//                   </div>
//                 </div>
//               </div>
//               <button class="prev carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//               </button>
//               <button class="next carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//               </button>
//             </div>   
//         </div>
//     );
// }

// export default Home;
import React from "react";
import '../styles/Home.css';
import Navbar from "../components/Navbar";
import Carouselcomp from "../components/carousel";
import Section from "../components/Section";
// import one from '../components/one.jpeg';
// import two from '../components/two.jpeg';
// import three from '../components/three.jpeg';

function Home() {
    const mediaList=[{url:"https://images.hellomagazine.com/horizon/landscape/e7a91ee737a6-scarlett-johansson-pink-dress.jpg?tx=c_limit,w_960",type:"jpg"},{url:"https://www.byrdie.com/thmb/hOTeUiExvppmw_bGY1mxdfPfcEU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/angelinajoliecloudnails-d6b590cfef504bb2af12b1f9e9f1bb00.png",type:"jpg"},{url:"https://s.abcnews.com/images/US/emma-stone-ap-hb-180814_hpMain_16x9_992.jpg?w=992",type:"jpg"}]
    const clubs=[{alt:'one',name:'Club 1',description:'This is a description of club 1'},{alt:'two',name:'Club 2',description:'This is a description of club 2'},{alt:'three',name:'Club 3',description:'This is a description of club 3'}];
    const announcements=[{alt:'one',name:'Announcement 1',description:'This is a description of announcement 1'},{alt:'two',name:'Announcement 2',description:'This is a description of announcement 2'},{alt:'three',name:'Announcement 3',description:'This is a description of announcement 3'}];
    const events=[{alt:'one',name:'Event 1',description:'This is a description of event 1'},{alt:'two',name:'Event 2',description:'This is a description of event 2'},{alt:'three',name:'Event 3',description:'This is a description of event 3'}];
    
    return (
        <div className="homePage">
            <Navbar/>
            <Carouselcomp mediaList={mediaList}/>
            <Section bcolor="white" hcolor="black" title="Clubs" card={clubs} />
            <Section bcolor="#3F4042" hcolor="white" title="Announcements" card={announcements}/>
            <Section bcolor="white" hcolor="black" title="Events" card={events} />
        </div>
    );
}

export default Home;
