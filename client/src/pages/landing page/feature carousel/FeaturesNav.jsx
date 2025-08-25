export default function FeaturesNav({features,onChange}){

    const mapping = features.map(feature=>
        <input 
            type="radio"
            key={feature.id}
            id={feature.id}
            name="features-nav"
            value={feature.id}
            onChange={()=>onChange(feature.id)}
            
        />
    )

    return(
        <form id="features-nav">
            {mapping}
        </form>
    )
}