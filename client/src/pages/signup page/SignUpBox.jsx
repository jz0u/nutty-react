import "../../styles/SignUpBox.css"
export default function SignUpBox() {


    return (
        <div id="SignUpBox">
            <form id="signup-form">

                <label htmlFor="username" id="username-label" className="label">
                    <h1>Username:</h1>
                    <input type="text" id="username-textbox" name="username" className="input-field"></input>
                </label>


                <label htmlFor="email" id="email-label" className="label">
                    <h1>Email:</h1>
                    <input type="email" id="email-textbox" name="email" className="input-field"></input>
                </label>

                <label htmlFor="password1" id="password1-label" className="label">
                    <h1>Password:</h1>
                    <input type="password" id="password1-textbox" name="password1" className="input-field"></input>
                </label>

                <label htmlFor="password2" id="password2-label" className="label">
                    <h1>Password:</h1>
                    <input type="password" id="password2-textbox" name="password2" className="input-field"></input>
                </label>



                <button className="label"><h1>Sign Up!</h1></button>

            </form>

        </div>

    )
}