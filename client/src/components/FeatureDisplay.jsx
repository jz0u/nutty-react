import FeaturesNav from "./FeaturesNav"

export default function FeatureDisplay({featuresMapping,features,onChange}){

    return(
        <div id="features-display">
                <header id="features-display-header">
                    <h1>Current Features:</h1>
                </header>
                
                    {featuresMapping}
                
                <footer>
                    <FeaturesNav
                        features={features}
                        onChange={onChange}
                    />
                </footer>
            </div>
    )


}