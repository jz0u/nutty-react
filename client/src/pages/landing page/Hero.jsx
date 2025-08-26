import "../../styles/Hero.css"
import { useNavigate } from "react-router-dom"
export default function Hero({headline,subheading}) {
    const navigate = useNavigate()

    const callToAction = () => {navigate("/signup")}
    return (
        <main id="HeroComponent">
            <div id="HeroText">
                <h1 id="headline">{headline}</h1>
                <h3 id="subtext"> {subheading}</h3>
            </div>
            <div id="HeroCTA">
                <button id="HeroButton"onClick={callToAction}>Get started!</button>
            </div>
        </main>
    )
}