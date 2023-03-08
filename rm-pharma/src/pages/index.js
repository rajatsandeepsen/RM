import Image from 'next/image'
import { Inter,Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/button'
import Product from '@/components/introsection'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

const addClasses = (className) =>  className.split(' ').map(c => styles[c]).join(' ')

export default function Home() {
  return (
      <>
      <div className={styles.main}>
      {/* Landing Intro */}
        <section className='container p-3 d-flex flex-column-reverse gap-5 gap-md-0 align-items-start align-items-md-center my-5 flex-md-row'>
            <div className='d-flex flex-column gap-3 align-items-start w-100'>
              <div className='w-100'>
              <h1 className='fw-bold'>
                Finding The Cure<br/>To Every Condition !
              </h1>
              <p>We aim to provide the cure for all aliments <br/> to create a healthier society and a brighter tomorrow.</p>
              </div>
              <span><Button data={{text: "Click here", link: "/", priority:"primary"}} /></span>
            </div>

            <div className={styles.Introimg}>
              <Image src="/intro.png" alt="Logo" width={550} height={400} priority/>
            </div>
        </section>

        {/* Community */}
        <section className='container p-3 d-flex flex-column gap-5 align-items-start align-items-md-center my-5 flex-md-row'>
            <div className={styles.community}>
              <Image src="/womanPharmacist.png" alt="Logo" width={550} height={400} priority/>
            </div>

            <div className='d-flex flex-column gap-3 align-items-start w-75'>
              <div className='w-100'>
              <h3 className='fw-bold'>
                Building a <br/>
                Healthy Community.
              </h3>
              <p>The world is our canvas. From manufacturing<br/> revolutionary/life-saving medicines in our <br/> motherland to extending our services to different <br/> corners of the world, we save lives globally.</p>
              </div>
              <span><Button data={{text: "Know more", link: "/", priority:"secondary"}} /></span>
            </div>
        </section>

        {/* List of Products */}

        <section className='container p-3 d-flex flex-column gap-5 my-5'>
          <div className='d-flex flex-column gap-2'>
            <div className='d-flex justify-content-between'>
              <h4 className='fw-bold'>List of Products</h4>
              <span><Button data={{text: "See all", link: "/", priority:""}} /></span>
            </div>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
            </div>

            <div className='d-flex justify-content-between mt-5'>
              <h4 className='fw-bold'>Shop by Category</h4>
              <span><Button data={{text: "See all", link: "/", priority:""}} /></span>
            </div>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
            </div>
          
          </div>
        </section>

      </div>
      </>
  )
}
