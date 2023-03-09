import Link from 'next/link'
const Footer = () => {
    return ( 
        <footer>
        
        <div className="d-flex justify-content-evenly container">
          <ul>
            <li>
              Lorem, ipsum
            </li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li><Link href="">Lorem, ipsum</Link></li>
          </ul>
          <ul>
            <li>
              Lorem, ipsum
            </li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li><Link href="">Lorem, ipsum</Link></li>
          </ul>
          <ul>
            <li>
              Lorem, ipsum
            </li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li><Link href="">Lorem, ipsum</Link></li>
            <li className='d-flex gap-4 mt-auto'>
              <Link className='text-white' href="www.facebook.com" ><i className="fs-6 bi bi-facebook"></i></Link>
              <Link className='text-white' href="www.instagram.com" ><i className="fs-6 bi bi-instagram"></i></Link>
              <Link className='text-white' href="www.twitter.com" ><i className="fs-6 bi bi-twitter"></i></Link>
            </li>
          </ul>
        </div>
        
          <p className="text-center border-top p-1 py-3 fs-7 m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellendus alias esse maiores id pariatur similique veritatis neque corrupti fugit</p>
        
        </footer>

     );
}
 
export default Footer;