import Image from 'next/image'
import { Inter,Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/button'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";


export const Product = (props) => {
    // props.data.hasOwnProperty(''); 
    let { name, src, text, link, index, extra } = props.data;

    if  (index <= 2) {
        extra = "";
      }
    
    return ( 
        <div className={extra? `col d-lg-block ${extra} collapse`: "col"} data-aos="fade-left" data-aos-delay={(2+index) + "00"}>
            <div className={styles.product}>
                <Image src={"/products/" + src} alt="Logo" width={200} height={200} priority/>
                <h5 className='fw-semibold'>{name}</h5>
                <p className='fs-7'>{text}</p>
                <span><Button data={{text: "Enquire", link: link, priority:"primary"}} /></span>
            </div>
        </div>
     );
}

export const Whychoose = (props) => {
    const { title, text, number } = props.data;
    return (
        <div className='d-flex gap-4 align-items-start' data-aos="fade-up" data-aos-delay={(2 + number) + "00"}>
            <li className={styles.numberTrack}>{"0"  + number}</li>
            <div className='w-100'>
                <h4 className='fw-semibold'>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
        )
}





export function Clients(expirence){

    return (
    
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} navigation={true}
              autoplay={{delay: 3500,disableOnInteraction: true,}} pagination={true} 
              slidesPerView={1} spaceBetween={30} loop={true} className={styles.swiper} scrollbar={{ draggable: true }} >
              

            {expirence.map((data) => (
                <SwiperSlide className={styles.Clients}>
                <Image src='/client.png' className='img-fluid' width={300} height={100} priority/>
                  <div className="d-flex text-start flex-column gap-3 p-3 px-md-5 justify-content-center">
                    <h4 className='fw-bold'>{data.name}</h4>
                    <h6 className=''>{data.prof}</h6>
                    <p className='p-0 m-0 w-100'>{data.text}</p>
                        
                  </div>    
              </SwiperSlide>
            ))}
              
        </Swiper>
    )
}
    

