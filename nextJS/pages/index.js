import Header from "../components/Header/Header.jsx";
import HelpCommerceBlock from "../components/HelpCommerceBlock/HelpCommerceBlock.jsx";
import Featured from "../components/Featured/Featured.jsx";
import WeHelp from "../components/WeHelp/WeHelp.jsx";
import FindOut from "../components/FindOut/FindOut";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Review/Slider.js";

export default function Home() {
    return (
        < >
            <Header/>
            <HelpCommerceBlock/>
            <Featured/>
            <WeHelp/>
            <Slider/>
            <FindOut/>
            <Footer/>
        </>
    )
}
