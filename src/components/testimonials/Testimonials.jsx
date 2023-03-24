import React from 'react';
import "./testimonials.css";
import Client1 from '../../assets/client1.jfif';
import Client2 from '../../assets/client2.jfif';
import Client3 from '../../assets/client3.jfif';
import Client4 from '../../assets/client4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Client1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae voluptas incidunt numquam rem laudantium harum cupiditate natus provident consequuntur laboriosam iure at consequatur magnam esse facilis quia, labore mollitia?'
  },
  {
    avatar: Client2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae voluptas incidunt numquam rem laudantium harum cupiditate natus provident consequuntur laboriosam iure at consequatur magnam esse facilis quia, labore mollitia?'
  },
  {
    avatar: Client3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae voluptas incidunt numquam rem laudantium harum cupiditate natus provident consequuntur laboriosam iure at consequatur magnam esse facilis quia, labore mollitia?'
  },
  {
    avatar: Client4,
    name: 'Nana Brown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae voluptas incidunt numquam rem laudantium harum cupiditate natus provident consequuntur laboriosam iure at consequatur magnam esse facilis quia, labore mollitia?'
  },
]

const Testimonials = () => {
  return (
    <section id='#testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}  
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar1" />
                  <h5 className='client__name'>{name}</h5>
                </div>
                <small className='clients__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials