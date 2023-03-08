import { Inter } from 'next/font/google'
import Link from 'next/link';
import styles from '@/styles/Home.module.scss'

const Button = (props) => {
    const { text, link, priority } = props.data;
    if (priority === "primary") {
        return ( 
            <Link className={styles.Button} href={link}>
                {text}
            </Link>
            
         );
    }
    if (priority === "secondary") {
        return ( 
            <Link className={styles.ButtonS} href={link}>
                {text}
            </Link>
            
         );
    }
    else {
        return ( 
            <a className={styles.Button2} href={link}>
                {text}
            </a>
         );
    }
    
}
 
export default Button;