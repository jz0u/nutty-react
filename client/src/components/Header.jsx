import Logo from "./Logo"
import "../styles/Header.css"
import HeaderNav from "./HeaderNav"
export default function Header() {
    
    return (
        <header id="Header">
            <Logo/>
            <HeaderNav/>
        </header>
    )
}