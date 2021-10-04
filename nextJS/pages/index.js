import Header from "../components/Header/Header.jsx";
import HelpCommerceBlock from "../components/HelpCommerceBlock/HelpCommerceBlock.jsx";
import Featured from "../components/Featured/Featured.jsx";
import WeHelp from "../components/WeHelp/WeHelp.jsx";
import Review from "../components/Review/Review";
import FindOut from "../components/FindOut/FindOut";
import Footer from "../components/Footer/Footer";

import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.mainContainer}>
            <Header/>
            <HelpCommerceBlock/>
            <Featured/>
            <WeHelp/>
            <Review/>
            <FindOut/>
            <Footer/>
        </div>
    )
}
