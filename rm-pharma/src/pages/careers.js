import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import {Apply, Whyjoin, Services} from '@/components/applynow'
import Caroasel from '@/components/carousel'



export default function Home() {
    const expirence = [
        {name: "nurse", img:"/confidence.png", dept: "position", text: "Lorem ipsum dolor sit amet consectetur. Dignissim eu fermentum pellentesque a eget sit lorem a tincidunt. Lectus in pretium lacus consectetur euismod est velit. Elementum quis tempus nibh nunc elit nascetur ipsum orci praesent. Et dictumst lacus fermentum amet iaculis justo faucibus sapien lectus."},
        {name: "Doctor", img:"/confidence.png", dept: "position", text: "Lorem ipsum dolor sit amet consectetur. Dignissim eu fermentum pellentesque a eget sit lorem a tincidunt. Lectus in pretium lacus consectetur euismod est velit. Elementum quis tempus nibh nunc elit nascetur ipsum orci praesent. Et dictumst lacus fermentum amet iaculis justo faucibus sapien lectus."},
        {name: "someone", img:"/confidence.png", dept: "position", text: "Lorem ipsum dolor sit amet consectetur. Dignissim eu fermentum pellentesque a eget sit lorem a tincidunt. Lectus in pretium lacus consectetur euismod est velit. Elementum quis tempus nibh nunc elit nascetur ipsum orci praesent. Et dictumst lacus fermentum amet iaculis justo faucibus sapien lectus."},
        {name: "person", img:"/confidence.png", dept: "position", text: "Lorem ipsum dolor sit amet consectetur. Dignissim eu fermentum pellentesque a eget sit lorem a tincidunt. Lectus in pretium lacus consectetur euismod est velit. Elementum quis tempus nibh nunc elit nascetur ipsum orci praesent. Et dictumst lacus fermentum amet iaculis justo faucibus sapien lectus."}]

    return (
        <main>
            <section className={styles.careerShowcase}>
            <div className='container py-5 gap-3 d-flex align-items-center flex-md-row flex-column-reverse'>
                <div className='d-flex flex-column gap-3 w-100' data-aos="fade-right">
                    <h2 className='fw-bold'>Careers At RM Pharma</h2>
                    <p className='fw-normal fs-7'>Lorem ipsum dolor sit amet consectetur. Aliquam commodo tincidunt massa proin sapien at. Enim aliquet nisl viverra ipsum sem. </p>
                </div>
                <div className={styles.careers} data-aos="fade-left">
                    <Image src="/careers.png" alt="showcase pic" className='img-fluid' width={500} height={300} priority/>
                </div>
            </div>
            </section>

            <section className='container d-flex flex-column gap-3 gap-md-4'>
                <div className='text-center px-5 d-flex flex-column gap-4' data-aos="fade-up">
                    <h2 className='fw-bold'>Current Openings</h2>
                    <p className='fs-7 fw-normal'>Lorem ipsum dolor sit amet consectetur. Nisi nunc sagittis adipiscing ac massa ipsum faucibus at. Mauris sed non eget phasellus quis pulvinar gravida vitae. Eget congue dui ac tincidunt. Quisque metus tortor rhoncus suspendisse massa ac. Tristique sed tristique molestie eget vel vel mauris. </p>
                </div>
                <div className='d-flex flex-column gap-3 mb-5' data-aos="fade-up">
                    <Apply data={{title: "Position", text: "Experience", id: "123"}} />
                    <Apply data={{title: "Position", text: "Experience", id: "1234"}} />
                    <Apply data={{title: "Position", text: "Experience", id: "12345"}} />
                    <Apply data={{title: "Position", text: "Experience", id: "123456"}} />
                </div>
            </section>
            <section className='container d-flex flex-column gap-3 gap-md-4'>
                    <div className='text-center px-5 d-flex flex-column gap-4' data-aos="fade-up">
                        <h2 className='fw-bold'>Why Join Us?</h2>
                    </div>
                    <div className="d-flex gap-3 justify-content-evenly flex-sm-row flex-column">
                        <Whyjoin data={{title: "Lorem1", number:"01", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam laborum iusto dolore, harum at suscipit!" }} />
                        <Whyjoin data={{title: "Lorem2", number:"02", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam laborum iusto dolore, harum at suscipit!" }} />
                        <Whyjoin data={{title: "Lorem3", number:"03", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam laborum iusto dolore, harum at suscipit!" }} />
                    </div>
            </section>
            <section className='container d-flex flex-column gap-3 gap-md-4'>
                    <div className='text-center px-5 d-flex flex-column gap-4' data-aos="fade-up">
                        <h2 className='fw-bold'>Services</h2>
                    </div>
                    <div className="d-flex gap-4 justify-content-evenly flex-wrap mb-5">
                        <Services data={{src: "/medicineLogos.png", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam laborum iusto dolore, harum at suscipit!" }} />
                        <Services data={{src: "/medicineLogos.png", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam laborum iusto dolore, harum at suscipit!" }} />
                        <Services data={{src: "/medicineLogos.png", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam laborum iusto dolore, harum at suscipit!" }} />
                    </div>
            </section>

            <section className='container d-flex flex-column'>
                <div className='text-center px-5 d-flex flex-column gap-4' data-aos="fade-up">
                    <h2 className='fw-bold'>Life at RM Pharma</h2>
                </div>
                <div className='mb-5' data-aos="fade-up">
                    {Caroasel(expirence)}
                </div>
            </section>
        </main>

    )
}

