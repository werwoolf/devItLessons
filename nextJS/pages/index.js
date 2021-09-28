import styles from '../styles/Home.module.css'
import Header from "../components/Header/Header.jsx";
import HelpCommerceBlock from "../components/HelpCommerceBlock/HelpCommerceBlock.jsx";
import Featured from "../components/Featured/Featured.jsx";
import WeHelp from "../components/WeHelp/WeHelp.jsx";

export default function Home() {
    return (
        <div className={styles.mainContainer}>
            <Header/>
            <HelpCommerceBlock/>
            <Featured/>
            <WeHelp/>
        </div>
    )
}
