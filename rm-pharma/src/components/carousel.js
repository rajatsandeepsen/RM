import styles from '@/styles/Home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

import {Experience} from '@/components/applynow'


export default function Caroasel(expirence){
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
      };

      

    return (
    
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} navigation={false}
              autoplay={{delay: 2500,disableOnInteraction: true,}}
              slidesPerView={1} spaceBetween={30} loop={true} className={styles.swiper} scrollbar={{ draggable: true }} 
              pagination={pagination}>

            {expirence.map((data) => (
              <SwiperSlide className={styles.slides}>
                <Experience data={data} />
              </SwiperSlide>
            ))}
              
        </Swiper>
    )
}
    

