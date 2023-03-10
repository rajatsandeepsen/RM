import Image from 'next/image'
import Button from '@/components/button';
import styles from '@/styles/Home.module.scss'
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'


const Header = () => {

    const colors =[
        {
          name: 'Orange',
          value: 'orange'
        },
        {
          name: 'Red',
          value: 'red'
        },
        {
          name: 'Blue',
          value: 'blue'
        },
        {
          name: 'Purple',
          value: 'purple'
        },
        {
          name: 'Yellow',
          value: 'yellow'
        }
      ]

    return (
    <header>
        <nav className="navbar container justify-content-between navbar-expand-lg navbar-light px-3 py-4 gap-3">
            <a className="navbar-brand" href="#" data-aos="fade-right">
                <Image src="/logo.png" alt="Logo" width={70} height={45} priority/>
            </a>
            <button data-aos="fade-left" className="navbar-toggler btn border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                <i className="bi bi-list theRed fs-3"></i>
            </button>
            <style jsx>{`
                .navbar-toggler:focus {
                    box-shadow: 0px 0px 0px 0px #000000;
                }
            `}</style>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-between align-items-lg-center w-100 text-start gap-3">
                <div className={styles.Search}>
                    <i className="bi bi-search"/>
                    <SelectSearch search={true} options={colors} name="language" placeholder="Search" />
                    
                </div>
                <span data-aos="fade-left"><Button data={{text: "Home", link: "/", priority:""}} /></span>
                <span data-aos="fade-left"><Button data={{text: "About Us", link: "/#aboutus", priority:""}} /></span>
                <span data-aos="fade-left"><Button data={{text: "Products", link: "/#products", priority:""}} /></span>
                <span data-aos="fade-left"><Button data={{text: "Contact", link: "/#contact", priority:"primary"}} /></span>
                
                
                </ul>
            </div>
        </nav>
    </header>
     );
}
 
export default Header;