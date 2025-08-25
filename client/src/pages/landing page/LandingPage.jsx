import FeatureSectionController from "./feature carousel/FeatureSectionController";
import Header from "../../components/Header";
import Hero from "./Hero"
import Footer from "../../components/Footer";
import "../../styles/LandingPage.css"
export default function LandingPage(){
    return(
        <main id="LandingPage">
            <Header/>
            <div id="HeroAndFeatureSectionController">
                <Hero/>
                <FeatureSectionController/>
            </div>
            <Footer/>
        </main>
    )
}