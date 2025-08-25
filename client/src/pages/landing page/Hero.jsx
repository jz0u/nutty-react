import "../../styles/Hero.css"
export default function Hero() {

    const headline = "Track food, hit goals, feel better."
    const subheading = "Log meals in seconds and stay on track."
    const callToAction = () => (console.log("redirect to signup"))
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