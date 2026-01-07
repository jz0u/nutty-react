import "../../styles/SignUpBox.css"
import Label from "../../components/Label"
export default function SignUpBox() {


    return (
        <div id="SignUpBox">
            <form id="signup-form">
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
                  <Label
                    name={"password2"}
                    labelID={"password2-label"}
                    text={"Password:"}
                    inputID={"password2-textbox"}
                    inputType={"password"}
                />
                <Label
                    name={"submit"}
                    labelID={"submit-label"}
                    text={"Sign Up!"}
                    inputID={"submit-input"}
                    inputType={"button"}                    
                />
            </form>

        </div>

    )
}