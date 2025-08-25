import FeatureSectionController from "./feature carousel/FeatureSectionController";
import Header from "../../components/Header";
import Hero from "./Hero"
import Footer from "../../components/Footer";

export default function LandingPage(){
    return(
        <div id="landingPage">
            <Header/>
            <main style={{ flex: 1 }} id="landingpage-main">
                <Hero/>
                <FeatureSectionController/>
            </main>
            <Footer/>
        </div>
    )
}