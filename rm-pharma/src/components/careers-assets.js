import Button from '@/components/button'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'

export const Apply = (props) => {
    const {title, index, text, id} = props.data;

    return ( 
            <div className='d-flex justify-content-between align-items-center p-1 applynow' data-aos="fade-up" data-aos-delay={(2+index) + "00"}>
                <div>
                    <h6 className='fw-bold fs-5'>{title}</h6>
                    <p className='fs-7'>{text}</p>
                </div>
                <Button data={{text: "Apply now", link: "/careers/" + id, priority:"primary"}} />
                <style jsx>{`
                    .applynow {
                        border-bottom: 1px var(--gray) solid;
                    }
                `}</style>
            </div>         
     );
}
 
export const Whyjoin = (props) => {
    const {title, index, text} = props.data;
    return ( 
        <div className='d-flex flex-column gap-3 text-center' data-aos="fade-right"  data-aos-delay={(2+index) + "00"}>
            <li className={styles.numberTrack}>{"0" + index}</li>
            <h6 className='fw-bold'>{title}</h6>
            <p className='fs-7'>{text}</p>
        </div> 
    );
}

export const Services = (props) => {
    const {src, index, text} = props.data;
    return ( 
        <div className={styles.Services} data-aos="fade-left" data-aos-delay={(2+index) + "00"}>
            <Image src={src}  alt="Service" width={60} height={60}/>
            <p className='fs-7'>{text}</p>
        </div> 
    );
}


export const Experience = (props) => {
    const {name,img, dept, text,} = props.data;
    return ( 
      <>
            <div className="d-flex flex-column gap-3 justify-content-center flex-grow-1">
                <div className='w-100'>
                    <div className={styles.squarebox}>
                        <Image className='d-block position-relative h-100' src={img} width={45} height={50} />
                    </div>
                    <h4>{name}</h4>
                    <h6>{dept}</h6>
                </div>
            <p className='p-0 m-0 w-100'>{text}</p>
            </div>
            <Image src={img} width={225} height={300} />
        </>
        
     );
  }
  