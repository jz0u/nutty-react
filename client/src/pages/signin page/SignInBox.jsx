import Label from "../../components/Label"
import "../../styles/SignInBox.css"
export default function SignInBox(){
    return(

        <div id="SignInBox">
            <form id="signin-form">
                <Label
                    name={"username"}
                    labelID={"username-label"}
                    text={"Username:"}
                    inputID={"username-textbox"}
                    inputType={"text"}
                />
                <Label
                    name={"email"}
                    labelID={"email-label"}
                    text={"Email:"}
                    inputID={"email-textbox"}
                    inputType={"email"}
                />
                <Label
                    name={"password1"}
                    labelID={"password1-label"}
                    text={"Password:"}
                    inputID={"password1-textbox"}
                    inputType={"password"}
                />
            </form>
        </div>
    )
}