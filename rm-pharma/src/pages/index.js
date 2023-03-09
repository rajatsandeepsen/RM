import Image from 'next/image'
import { Inter,Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Button from '@/components/button'
import Link from 'next/link'
import {Clients, Product, Whychoose} from '@/components/introsection'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

const expirence = [
  {name: "nurse", img:"/client.png", prof: "position", text: "Lorem ipsum dolor sit amet consectetur. Dignissim eu fermentum pellentesque a eget sit lorem a tincidunt. Lectus in pretium lacus consectetur euismod est velit. Elementum quis tempus nibh nunc elit nascetur ipsum orci praesent. Et dictumst lacus fermentum amet iaculis justo faucibus sapien lectus."},
  {name: "Doctor", img:"/client.png", prof: "position", text: "Lorem ipsum dolor sit amet consectetur. Dignissim eu fermentum pellentesque a eget sit lorem a tincidunt. Lectus in pretium lacus consectetur euismod est velit. Elementum quis tempus nibh nunc elit nascetur ipsum orci praesent. Et dictumst lacus fermentum amet iaculis justo faucibus sapien lectus."},
  {name: "someone", img:"/client.png", prof: "position", text: "Lorem ipsum dolor sit amet consectetur. Dignissim eu fermentum pellentesque a eget sit lorem a tincidunt. Lectus in pretium lacus consectetur euismod est velit. Elementum quis tempus nibh nunc elit nascetur ipsum orci praesent. Et dictumst lacus fermentum amet iaculis justo faucibus sapien lectus."},
  {name: "person", img:"/client.png", prof: "position", text: "Lorem ipsum dolor sit amet consectetur. Dignissim eu fermentum pellentesque a eget sit lorem a tincidunt. Lectus in pretium lacus consectetur euismod est velit. Elementum quis tempus nibh nunc elit nascetur ipsum orci praesent. Et dictumst lacus fermentum amet iaculis justo faucibus sapien lectus."}]



const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

const addClasses = (className) =>  className.split(' ').map(c => styles[c]).join(' ')

export default function Home() {
  return (
      <>
      <main className={styles.main}>
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

        <section id='products' className='container p-3 d-flex flex-column gap-3 gap-md-4 my-5'>
          <div className='d-flex flex-column gap-2'>
            <div className='d-flex justify-content-between'>
              <h4 className='fw-bold'>List of Products</h4>
              <span>
                <a className={styles.Button2} type="button" data-bs-toggle="collapse" data-bs-target=".moreProducts">
                    See all
                </a>
              </span>
              
            </div>
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/" }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/", extra: true }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/", extra: true }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/", extra: true }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/", extra: true }} />
              <Product data={{ name: "lorem", src: "p1.png", text: "lorem lorem", link: "/", extra: true }} />
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

        {/* why choose us? */}

        <section id='aboutus' className='container d-flex flex-column flex-md-row gap-3 gap-md-4 my-5'>
          <div className='w-100 d-flex justify-content-center'>
            <Image src="/doctorLooking.png" alt="" width={300} height={500} className={styles.whychooseimg} priority/>
          </div>
          <div className='w-100 d-flex flex-column gap-1 gap-md-4'>
              <h2 className='fw-bold mb-4'>Why choose us?</h2>
              
              <Whychoose data={{ title: "Quality is Key", text:"We treat healthcare with utmost seriousness and priority thus our premium quality products ___,___and___ are our pride.", number:"01" }} />
              <Whychoose data={{ title: "Most Trusted", text:"Serving humanity since___ years we have been one of the most trusted healthcare brands for drugs.", number:"02" }} />
              <Whychoose data={{ title: "Customer Friendly", text:"Here at RM Pharamaceuticals we have a passion for putting the customer first and relentless working for their utmost satisfaction.", number:"03" }} />
          </div>
        </section>

        {/* Our Clients says */}

        <section className='container d-flex flex-column gap-5 text-center my-5 justify-content-center'>
            <h2 className='fw-bold mb-4'>Our Clients says</h2>              
                {Clients(expirence)}
        </section>

        {/* Contact us */}

        <section id='contact' className='container d-flex flex-column text-center gap-3 gap-md-4 my-5'>
          <h2 className='fw-bold'>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur? Id vulputate augue ipsum tempus quisque sapien amet lacus.</p>
          <div className={styles.Contactus}>
          <div className='d-flex w-100'>
              <form action="" className='d-flex flex-column gap-3 my-4 p-4 w-100'>
                <div className='d-flex gap-3'>
                  <div className='d-flex flex-column text-start gap-2 w-100'>
                    <label>First Name</label>
                    <input type="text" placeholder='Name' />
                  </div>
                  <div className='d-flex flex-column text-start gap-2 w-100'>
                    <label>Surname</label>
                    <input type="text" placeholder='Name' />
                  </div>
                </div>
                <div className='d-flex flex-column text-start gap-2'>
                    <label>Email Address</label>
                    <input type="email" placeholder='Enter Email Address' />
                </div>
                <div className='d-flex flex-column text-start gap-2'>
                    <label>Company Name (optional)</label>
                    <input type="email" placeholder='Enter Company Name' />
                </div>
                <div className='d-flex flex-column text-start gap-2'>
                    <label>Your Message</label>
                    <textarea type="email" placeholder='Write your message here' />
                </div>
                <div className='d-flex flex-column text-start align-items-start gap-2'>
                  <span><Button data={{text: "Submit", link: "", priority:"primary"}} /></span>
                </div>
              </form>
            </div>

            <div className={styles.contact}>
                <div className='w-100 h-100 ms-3 d-flex flex-column gap-4 p-5 align-items-start'>
                  <h3>Contact Info</h3>
                  <div className="w-100 d-flex flex-column align-items-start gap-4 list-unstyled">
                    <li><a href="http://lorem.com" target="_blank" className='d-flex align-items-center gap-4 text-white fs-6'><i className="bi bi-globe fs-3"></i> www.lorem.com</a></li>
                    <li><a href="http://lorem.com" target="_blank" className='d-flex align-items-center gap-4 text-white fs-6'><i className="bi bi-globe fs-3"></i> www.lorem.com</a></li>
                    <li><a href="http://lorem.com" target="_blank" className='d-flex align-items-center gap-4 text-white fs-6'><i className="bi bi-globe fs-3"></i> www.lorem.com</a></li>
                  </div>

                  <div className='d-flex gap-4 mt-auto'>
                    <Link className='text-white' href="www.facebook.com" ><i className="fs-2 bi bi-facebook"></i></Link>
                    <Link className='text-white' href="www.instagram.com" ><i className="fs-2 bi bi-instagram"></i></Link>
                    <Link className='text-white' href="www.twitter.com" ><i className="fs-2 bi bi-twitter"></i></Link>
                  </div>
                
                </div>
            </div>
          </div>
        </section>

          
      </main>
      </>
  )
}
