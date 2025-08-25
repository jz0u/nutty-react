import peanutButterIcon from "../assets/peanutButterIcon.png"
import "../styles/Logo.css"
export default function Logo() {
    return (
        <div id="Logo">
            <img src={peanutButterIcon} alt="peanut butter icon"></img>
            <h1>Nutty</h1>
        </div>
    )
}