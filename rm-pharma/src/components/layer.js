import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/Home.module.scss";
import { Inter,Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

const Layer = ({children}) => {
    return ( 
        <main className={montserrat.className}>
            <Header />
            {children}
            <Footer />
        </main>
     );
}
 
export default Layer;