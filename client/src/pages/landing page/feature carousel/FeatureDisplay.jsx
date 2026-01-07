import FeaturesNav from "./FeaturesNav"

export default function FeatureDisplay({featuresMapping,features,onChange}){

    return(
        <div id="FeatureDisplay">
                <header id="FeatureDisplayHeader">
                    <h2>Current Features:</h2>
                </header>

                <div id="FeatureDisplayContentBox">
                    {featuresMapping}
                </div>
                
                <footer id="FeatureDisplayFooter">
                    <FeaturesNav
                        features={features}
                        onChange={onChange}
                    />
                </footer>
            </div>
    )


}