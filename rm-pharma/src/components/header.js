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
        <nav className="navbar container justify-content-between navbar-expand-lg navbar-light px-3 py-4  gap-3">
            <a className="navbar-brand" href="#">
                <Image src="/logo.png" alt="Logo" width={70} height={45} priority/>
            </a>
            <button className="navbar-toggler btn border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                <i className="bi bi-list theRed fs-3"></i>
            </button>
            <style jsx>{`
                .navbar-toggler:focus {
                    box-shadow: 0px 0px 0px 0px #000000;
                }
            `}</style>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-between text-center gap-3 w-100">

                <div className={styles.Search}>
                    <i className="bi bi-search"/>
                    <SelectSearch search={true} options={colors} name="language" placeholder="Search" />
                    <i className="bi bi-chevron-down"/>
                </div>
                <Button data={{text: "Home", link: "/", priority:""}} />
                <Button data={{text: "About Us", link: "/#aboutus", priority:""}} />
                <Button data={{text: "Products", link: "/#products", priority:""}} />
                <Button data={{text: "Contact", link: "/#contact", priority:"primary"}} />
                
                
                </ul>
            </div>
        </nav>
    </header>
     );
}
 
export default Header;