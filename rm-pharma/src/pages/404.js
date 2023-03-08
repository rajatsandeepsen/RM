import Image from 'next/image'
import { Inter,Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/button'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

const addClasses = (className) =>  className.split(' ').map(c => styles[c]).join(' ')

export default function Home() {

  useEffect(() => {
    setTimeout(()=>{
      location.href = "/"
    }, 3000)
  }, [])
  

  return (
      <>
      <div className={styles.center }>
        <h1>Page not Found</h1>
        <Button data={{text: "Back to Home", link: "/", priority:"primary"}} />
      </div>
      </>
  )
}
