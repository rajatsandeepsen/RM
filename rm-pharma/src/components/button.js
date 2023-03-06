import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const Button = (props) => {
    const { text, link, priority } = props.data;
    if (priority === "primary") {
        return ( 
            <a className={styles.Button} href={link}>
                {text}
            </a>
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