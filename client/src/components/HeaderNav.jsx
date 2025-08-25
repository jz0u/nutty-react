import { useNavigate } from "react-router-dom"

export default function HeaderNav() {
    const navigate = useNavigate()

    const toSignUp = () => {navigate("/signup")}
    return (
        <nav id="HeaderNav">
            <button>Login</button>
            <button onClick={toSignUp}>Signup</button>
        </nav>
    )
}