export default function Hero() {

    const headline = "Track food, hit goals, feel better."
    const subheading = "Log meals in seconds and stay on track."
    const callToAction = () => (console.log("redirect to signup"))
    return (
        <section id="hero-section">
            <div id="hero-text">
                <h1>{headline}</h1>
                <h3>{subheading}</h3>
            </div>
            <div id="hero-btn-div">
                <button id="hero-btn"onClick={callToAction}>Get started!</button>
            </div>
        </section>
    )
}