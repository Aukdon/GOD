import Style from "./SignUp.module.css";

import {Link} from "react-router-dom";
import {useState} from "react";

function SignUp() {

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
    }

    return(
        <div className={Style.formContainer}>
           <form>
                <p className={Style.title}>Sign Up</p>
                <input name="fullName" type="text" placeholder="Enter full name" value={userInput.fullName || "" } onChange={((e)=>handleChange(e))}/>
                <input name="emailId" type="text" placeholder="Enter Email Id" value={userInput.emailId || "" } onChange={((e)=>handleChange(e))}/>
                <input name="password" type="password" placeholder="Password" value={userInput.password || ""} onChange={(e)=>handleChange(e)}/>
                <div className={Style.signUp}>
                    <button onClick={(e)=>handleSubmit(e)}>Sign Up</button>
                </div>
                <div className={Style.signIn}>
                    <p>Already have an accont?</p>
                    <button><Link to="/signin">Sign In</Link></button>
                </div>
           </form>
        </div>
    )
}

export default SignUp