import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SignInBox from "./SignInBox"
import "../../styles/SignInPage.css"
export default function SignInPage() {
    return (
        
        <main id="SignInPage">
            <Header/>
            <div id="SignInPage-main">
                <SignInBox/>
            </div>
            <Footer/>
        </main>
    )
}