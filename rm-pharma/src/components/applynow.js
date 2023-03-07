import Button from '@/components/button'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'

export const Apply = (props) => {
    const {title, text, id} = props.data;

    return ( 
            <div className='d-flex justify-content-between align-items-center p-1 applynow'>
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
    const {title, number, text} = props.data;
    return ( 
        <div className='d-flex flex-column gap-3 text-center'>
            <li className={styles.numberTrack}>{number}</li>
            <h6 className='fw-bold'>{title}</h6>
            <p className='fs-7'>{text}</p>
        </div> 
    );
}

export const Services = (props) => {
    const {src, text} = props.data;
    return ( 
        <div className={styles.Services}>
            <Image src={src}  alt="Service" width={60} height={60}/>
            <p className='fs-7'>{text}</p>
        </div> 
    );
}
 