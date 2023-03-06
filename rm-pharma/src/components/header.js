import Image from 'next/image'
import Button from '@/components/button';
import styles from '@/styles/Home.module.scss'
import { useEffect } from 'react';

const Header = () => {


    return (
    <header>
        <nav className="navbar container justify-content-between navbar-expand-lg navbar-light px-3 py-4  gap-3">
            <a className="navbar-brand" href="#">
                <Image src="/logo.png" alt="Logo" width={70} height={45} priority/>
            </a>
            <button className="navbar-toggler btn border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-list"></i>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-between text-center gap-3 w-100">

                <form className={styles.Search}>
                    <i className="bi bi-search"/>
                    <input type="search" placeholder="Search" />
                </form>
                <Button data={{text: "Home", link: "/", priority:""}} />
                <Button data={{text: "About Us", link: "/aboutus", priority:""}} />
                <Button data={{text: "Products", link: "/product", priority:""}} />
                <Button data={{text: "Contact", link: "/contact", priority:"primary"}} />
                
                
                </ul>
            </div>
        </nav>
    </header>
     );
}
 
export default Header;