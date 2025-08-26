import peanutButterIcon from "../assets/peanutButterIcon.png"
import "../styles/Logo.css"
import { Navigate, useNavigate } from "react-router-dom"

export default function Logo() {
    const navigate = useNavigate()
    const toHome = () => {navigate("/")}
    return (
        <div id="Logo-container">
            <button id="Logo-button" onClick={toHome}>
                <img src={peanutButterIcon} alt="peanut butter icon"></img>
                <h1>Nutty</h1>
            </button>
        </div>
    )
}