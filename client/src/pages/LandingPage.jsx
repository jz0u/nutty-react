import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero"
import Footer from "../components/Footer";

export default function LandingPage(){
    return(
        <div id="landingPage">
            <Header/>
            <main style={{ flex: 1 }} id="landingpage-main">
                <Hero/>
                <Features/>
            </main>
            <Footer/>
        </div>
    )
}