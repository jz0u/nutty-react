import Feature from "./Feature"
import FeatureList from "./FeatureList"
import { useState } from "react"
import { useEffect } from "react"
import FeatureDisplay from "./FeatureDisplay"
import "../../../styles/Feature.css"
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
        console.log()
    });

    return (
        <section id="FeatureSectionController">

            <FeatureDisplay
                featuresMapping={featuresMapping}
                features={features}
                onChange={handleDisplayedFeature}
            />

        </section>

    )
}