import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/styles/Home.module.scss";

const Layer = ({children}) => {
    return ( 
        <main>
            <Header />
            {children}
            <Footer />
        </main>
     );
}
 
export default Layer;