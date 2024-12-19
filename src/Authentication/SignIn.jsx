import { useState } from "react";
import Style from "./SignIn.module.css";
import { Link } from "react-router-dom";

import godLogo from "../assets/images/GOD_Logo.png"
import { signInApi } from "../APIs/authentication.js";

import { useDispatch } from "react-redux";

function SignIn() {

    let [userInput, setUserInput] = useState({});

    let dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        // console.log(userInput);
        let res = await signInApi(userInput);
        // console.log(res);
        dispatch({type:"signIn", token: res.token});
        localStorage.setItem("token",res.token)
        
        if(res.code == 1){
            location.replace("/tournaments");
        }else{
            alert("Check your credentials")
        }
    }

    return(
        <div className={Style.formContainer}>
            <div className={Style.logoImg}>
                <img  src={godLogo} alt="Game Of Domination Logo" />
            </div>
           <form>
                <p className={Style.title}>Sign In</p>
                <input name="emailId" type="text" placeholder="Enter Email Id" value={userInput.emailId || "" } onChange={((e)=>handleChange(e))}/>
                <input name="password" type="password" placeholder="Password" value={userInput.password || ""} onChange={(e)=>handleChange(e)}/>
                <div className={Style.signIn}>
                    <button onClick={(e)=>handleSubmit(e)}>Sign In</button>
                    <a href="/passwordreset">Forgot Password?</a>
                </div>
                <div className={Style.signUp}>
                    <button><Link to="/signup">Sign Up</Link></button>
                </div>
           </form>
        </div>
    )
}

export default SignIn