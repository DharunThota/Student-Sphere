import React from 'react';
import './carousel.css'
function Carousel() {

    return (
            <div id="carouselExampleCaptions" class="cont carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-indicators d-none">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active image" data-bs-interval='4000'>
                  <img src="https://images.hellomagazine.com/horizon/landscape/e7a91ee737a6-scarlett-johansson-pink-dress.jpg?tx=c_limit,w_960" class="i d-block w-100" alt="FIRST"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div class="carousel-item image " data-bs-interval='4000'>
                  <img src="https://www.byrdie.com/thmb/hOTeUiExvppmw_bGY1mxdfPfcEU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/angelinajoliecloudnails-d6b590cfef504bb2af12b1f9e9f1bb00.png" class="i d-block w-100" alt="SECOND"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div class="carousel-item image " data-bs-interval='4000'>
                  <img src="https://s.abcnews.com/images/US/emma-stone-ap-hb-180814_hpMain_16x9_992.jpg?w=992" class="i d-block w-100" alt="THIRD"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button class="prev carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="next carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
    );
}
export default Carousel;