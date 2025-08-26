import "../../styles/SignUpPage.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SignUpBox from "./SignUpBox"
export default function SignUpPage() {
    return (
        <main id="SignUpPage" className="Page">
            <Header />
            <div id="SignUpPage-main">
                <SignUpBox />
            </div>
            <Footer />
        </main>

    )
}