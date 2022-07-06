import React, { useEffect, useState } from 'react';
import '../../scss/components/weapons.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export default function Weapons() {
const [currentSwipe, setCurrentSwipe] = useState(1);



  return (
    <section className="weapons">
        <h1 className="weapons__title">
        DEADLY WEAPONS
        </h1>
        <div className="weapons__slider">
            <Swiper 
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                    <img src={`/images/weapons/weapon1.png`} alt="weapon" />
             </SwiperSlide>
             <SwiperSlide>
                    <img src={`/images/weapons/weapon2.png`} alt="weapon" />
             </SwiperSlide>
             <SwiperSlide>
                    <img src={`/images/weapons/weapon3.png`} alt="weapon" />
             </SwiperSlide>

            </Swiper>
            <p className="weapons__text">
            Space was colonized thousand years ago. All planets in the galaxy are controlled by mighty states. However, for your loyalty you can get the whole planet under control as feudal allotment. 
            Planets require you to mine valuable void crystals and provide tournaments.
            </p>
        </div>
    </section>
  )
}
