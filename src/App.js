import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import'swiper/swiper-bundle.css';
import './styles.css';

SwiperCore.use([Navigation,Pagination]);

function App() {
  const slides=[];

  for (let i=0; i<5; i+=1){
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div class="rectangle"> 
        <div class="profile_image"></div>
        <div class="detailcontainer">
          <div class="name_box"><div class="name_word">Aliyah, 20</div></div>
          <div class="preferences_box"><div class="preference_word">Prefers Ages 18 - 25</div></div>
          <div class="bio_box"><div class="bio_words">I’d love to jog in the mornings with 1 or 2 people!</div></div>
        </div>
        </div>
      </SwiperSlide>
    );
  }
  
  return ( 
    <React.Fragment>
    <Swiper 
      id="main" 
      tag="section"
      wrapperTag="ul" 
      navigation
      //pagination   //blue dots in bottom not needed
      spaceBetween={.5} 
      slidesPerView={1}
      onInit={(swiper) => console.log('Swiper initialized!', swiper)}
      onSlideChange={(swiper) => console.log('Slide index changed to !', swiper.activeIndex)}
      onReachEnd={() => console.log('Swiper end reached!')}

      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
}

export default App;
