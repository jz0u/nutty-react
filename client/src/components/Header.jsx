import peanutButterIcon from "../assets/peanutButterIcon.jpg"
export default function Header() {
    return (
        <header>
            <img src={peanutButterIcon}></img>
            <h1>Nutty</h1>
            <nav>
                <button>Login</button>
                <button>Signup</button>
            </nav>
        </header>
    )
}