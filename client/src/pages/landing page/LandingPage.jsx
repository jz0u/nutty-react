import FeatureSectionController from "./feature carousel/FeatureSectionController";
import Header from "../../components/Header";
import Hero from "./Hero"
import Footer from "../../components/Footer";
import "../../styles/LandingPage.css"

export default function LandingPage() {
    const headline = "Track food, hit goals, feel better."
    const subheading = "Log meals in seconds and stay on track."


    return (
        <main id="LandingPage">
            <Header />
            <div id="HeroAndFeatureSectionController">
                <Hero
                    headline={headline}
                    subheading={subheading }

                />
                <FeatureSectionController />
            </div>
            <Footer />
        </main>
    )
}