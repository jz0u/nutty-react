import Feature from "./Feature"
import FeatureList from "./FeatureList"
import { useState } from "react"
import FeaturesNav from "./FeaturesNav"
import { useEffect } from "react"
export default function Features() {

    

    const [features, setFeature] = useState(FeatureList)

    function handleDisplayedFeature(id) {
        setFeature(prev => prev.map(x =>

            (id === x.id ? { ...x, off: false } : { ...x, off: true })

        ))
    }

    const featuresMapping = features.map(feature =>
        <Feature
            key={feature.id}
            fName={feature.fName}
            fDesc={feature.fDesc}
            fImg={feature.fImg}
            off={(feature.off) ? "off" : "on"}
        />
    )
    /* dev */
     useEffect(() => {
        console.log(features)
    });

    return (
        <section id="features-section">

            <div id="features-display">
                <header>
                    <h1>Current Features:</h1>
                </header>
                {featuresMapping}
                <footer>
                    <FeaturesNav
                        features={features}
                        onChange={handleDisplayedFeature}
                    />
                </footer>
            </div>

        </section>

    )
}