import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import CardProduct from './CardProduct';
import { TProduct } from '../../Layout/app/Types';
import Categories from './Categories';


interface CategoriesSwiperProps {
  data: string[];
}

const CategoriesSwiper: React.FC<CategoriesSwiperProps> = ({ data }) => {
  return (
    <div className='CategoriesSwiper'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
      
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 5 ,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          data?.map((item,index)=>{
            return(
              <SwiperSlide key={index}><Categories item={item} index={index} /></SwiperSlide>

            )
          })
        }

      </Swiper>
    </div>
  );
}

export default CategoriesSwiper;
