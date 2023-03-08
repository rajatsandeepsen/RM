import Image from 'next/image'
import { Inter,Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/button'

const Product = (props) => {

    const { name, src, text, link } = props.data;

    return ( 
        <div className='col'>
            <div className={styles.product}>
                <Image src={"/products/" + src} alt="Logo" width={200} height={200} priority/>
                <h5 className='fw-semibold'>{name}</h5>
                <p className='fs-7'>{text}</p>
                <span><Button data={{text: "Enquire", link: link, priority:"primary"}} /></span>
            </div>
        </div>
     );
}
 
export default Product;