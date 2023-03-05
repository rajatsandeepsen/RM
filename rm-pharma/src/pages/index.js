import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })
const addClasses = (className) =>  className.split(' ').map(c => styles[c]).join(' ')

export default function Home() {
  return (
      <>
      <div className={styles.main}>
      
      </div>
      </>
  )
}
