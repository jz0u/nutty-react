import "../styles/Label.css"
export default function Label(props) {

    const isNotBtn = (
        <label htmlFor={props.name} id={props.labelID} className={"label"}>
            <h1>{props.text}</h1>
            <input type={props.inputType} id={props.inputId} name={props.name} className="input-field"></input>
        </label>)

    const isBtn = (
        <button className="label"><h1>Sign Up!</h1></button>
    )
    return ( 
        (props.inputType==="button")?isBtn:isNotBtn
    )
}