import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const Button = (link, text) => {
    return ( 
        <button className={styles.Button} href={link}>
            {text}
        </button>
     );
}
 
export default Button;