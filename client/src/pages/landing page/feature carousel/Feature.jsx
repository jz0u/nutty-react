export default function Feature({ fName, fDesc, fImg, off }) {

    return (
        <main className={`FeatureComponent-${off} FeatureComponent`}>
            <div id="feature-name">
                <h3>{fName}</h3>
            </div>
            <div id="feature-description">
                <p>{fDesc}</p>
            </div>
            <img id="feature-image" src={fImg}></img>
        </main>
    )
}   