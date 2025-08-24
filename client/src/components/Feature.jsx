export default function Feature({fName,fDesc,fImg,off}){
    
    return(
        <section className={`${off} feature-component`}>
            <h3>{fName}</h3>
            <p>{fDesc}</p>
            <img src={fImg}></img>

        </section>
    )
}   