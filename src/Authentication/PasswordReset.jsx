import Style from "./PasswordReset.module.css";

import {useState} from "react";

function PasswordReset() {

    let [userInput, setUserInput] = useState({});

    function handleChange(e){
        e.preventDefault();
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(userInput);
        location.replace("/signin")
    }

    return(
        <div className={Style.formContainer}>
           <form>
                <p className={Style.title}>Password Reset</p>
                <label htmlFor="password">Enter new password</label>
                <input name="password" type="password" placeholder="Password" value={userInput.password || ""} onChange={(e)=>handleChange(e)}/>
                <div className={Style.signUp}>
                    <button onClick={(e)=>handleSubmit(e)}>Reset Password</button>
                </div>
           </form>
        </div>
    )
}

export default PasswordReset