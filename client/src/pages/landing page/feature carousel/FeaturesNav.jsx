import "../../../styles/FeaturesNav.css"
export default function FeaturesNav({features,onChange}){

    const mapping = features.map(feature=>
        <input 
            type="radio"
            key={feature.id}
            id={feature.id}
            name="features-nav"
            className="feature-radio"
            value={feature.id}
            onChange={()=>onChange(feature.id)}
            defaultChecked={feature.id === 0}
        />
    )

    return(
        <div id="FeaturesNav">
            <form>
                {mapping}
            </form>
        </div>
        
    )
}