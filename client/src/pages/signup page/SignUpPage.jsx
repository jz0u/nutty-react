import "../../styles/SignUpPage.css"
import Header from "../../components/Header"
export default function SignUpPage(){
    return(
    <>
        <Header/>
        <label htmlFor="username" id="username-label">
                <h1>Username:</h1>
                <input type="text" id="username-textbox" name="username"></input>
        </label>

        <label>

        </label>
    </>
        
    )
}