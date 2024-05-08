import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styled from "styled-components";
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";


const SwiperSliderStyles = styled.div`
  
  &.swiper-container{
    margin: 1rem 0;
  }
  
  .swiper-slide{
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .swiper-img {
    height: 400px; 

  }
  
  @media screen and (max-width: 720px){
    .swiper-img {
      height: 300px;

    }
  }
  
`

export default function SwiperSlider(props) {
    console.log(props.screenshots);
    return (
        <SwiperSliderStyles className="swiper-container">

            <Swiper
                initialSlide={1}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={20}
                navigation
                pagination={{clickable: true}}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}

                breakpoints={
                {
                    576: {
                    slidesPerView: 1,
                },
                    768: {
                    slidesPerView: 1,
                },
                    1024: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                }
                }
                }
                className="mySwiper">

                {props.screenshots.map((url,idx)=>(
                    <SwiperSlide key={idx}><img src={url} className="swiper-img"/></SwiperSlide>
                ))}

            </Swiper>
        </SwiperSliderStyles>
    );
}