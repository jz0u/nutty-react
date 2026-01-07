import { useNavigate } from "react-router-dom"

export default function HeaderNav() {
    const navigate = useNavigate()

    const toSignUp = () => {navigate("/signup")}
    const toSignin = () => {navigate("/signin")}
    return (
        <nav id="HeaderNav">
            <button onClick={toSignin}>Signin</button>
            <button onClick={toSignUp}>Signup</button>
        </nav>
    )
}