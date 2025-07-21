import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CircleProgressDot from './CircleProgressDot';


const slides = [
  {
    img:"https://images.unsplash.com/photo-1600493335086-fda9b82b3870?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Community Lighting Fix",
    date: "June 21, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1706353445056-59070369d0bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Water Drainage Issue",
    date: "June 22, 2025",
  },
  {
    img: "https://www.digi.com/getattachment/blog/post/sustainable-city/gettyimages-544342844-1280x720.jpg?lang=en-us&width=1280&height=720&ext=.jpg",
    title: "Park Maintenance",
    date: "June 23, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1677943356981-bc48941c5ba9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW4lMjBjaXR5fGVufDB8fDB8fHww",
    title: "Street Potholes",
    date: "June 24, 2025",
  },
  {
    img: "https://media.istockphoto.com/id/173760095/photo/lineworker-4.jpg?s=612x612&w=0&k=20&c=6JbOjaVysIPridhe5jbH3QI8OamSKSnllSYMMyKLMi0=",
    title: "Garbage Pickup Delay",
    date: "June 25, 2025",
  },
];











const ImageSlider = () => {
  const swiperRef=useRef(null)
  const [activeIndex, setActiveIndex]=useState(0);
  const [progress, setProgress] = useState(0);

  const handleSlider=(index)=>{
    if(swiperRef.current){
      swiperRef.current.slideToLoop(index); 
    }

  }


useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        return 100;
      }
      return prev + 1;
    });
  }, 40); // 1% increase every 40ms → reaches 100% in approx 4 seconds

  return () => clearInterval(interval);
}, [activeIndex]);
  
  return (
    <div className="w-full  mx-auto "  >
       <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop 
      navigation
       autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
       onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setProgress(0);
        }}
      onSwiper={(swiper)=>swiperRef.current=swiper}
    >
      {slides.map((slide,index)=>(
        <SwiperSlide 
           
        key={index} >
              <img src={slide.img}
               className="w-full  h-[600px] object-cover"
               />
        </SwiperSlide>
      ))}
      </Swiper>
      <div className='flex justify-center gap-1 items-center' >
        {slides.map((slide,index)=>(
          <CircleProgressDot
           key={index}
           index={index}
           isActive={index===activeIndex}
           progress={index===activeIndex ? progress : 0}
           onClick={()=>handleSlider(index)}
           />
        ))}

      </div>

      


    </div>
  )
}

export default ImageSlider






