import Style from "./SignUp.module.css";

import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import { signUpApi } from "../APIs/authentication.js";

function SignUp() {
    let navigate = useNavigate();

    let [userInput, setUserInput] = useState({isHost: false, hostDetails: {}});
    let [isHost, setIsHost] = useState(false);

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
        let data = await signUpApi(userInput);
        
        if(data.code === 1){
            navigate("/signin");
        }else{
            console.log(data)
        }
    }

    function handleCheckbox(e){
        setIsHost(!isHost);
        let value = !isHost;
        // console.log(value);
        setUserInput({
            ...userInput,
            [e.target.name] : value
        })
    }

    function handleHostDetails(e){
        e.preventDefault();
        
        setUserInput({
            ...userInput,
            hostDetails : {
                ...userInput.hostDetails,
                [e.target.name]:e.target.value
            }
        })
        
    }

    return(
        <div className={Style.formContainer}>
           <form>
                <p className={Style.title}>Sign Up</p>
                
                <div className={Style.inputContainer}>
                    <input name="name" type="text" placeholder="Enter full name" value={userInput.name || "" } onChange={((e)=>handleChange(e))}/>
                    <input name="emailId" type="text" placeholder="Enter Email Id" value={userInput.emailId || "" } onChange={((e)=>handleChange(e))}/>
                    <input name="password" type="password" placeholder="Password" value={userInput.password || ""} onChange={(e)=>handleChange(e)}/>
                    <input name="phone" type="tel" placeholder="Enter mobile number" value={userInput.phone || "" } onChange={((e)=>handleChange(e))}/>
                    {/* <div className={Style.checkBoxInput}> */}
                        <label htmlFor="isHost">Are you going to host tournaments and playgrounds?</label>
                        <input onChange={handleCheckbox} name="isHost" type="checkbox" value="false" />
                    {/* </div> */}
                </div>
                <div className={`${Style.inputContainer} ${ !isHost ? Style.hostDetailsContainer : null}`}>
                    <input name="officialFullName" type="text" placeholder="Full name as given in ID" value={userInput.hostDetails.officialFullName || "" } onChange={((e)=>handleHostDetails(e))}/>
                    <input name="nationalId" type="text" placeholder="Aadhaar or driving licence ID" value={userInput.hostDetails.nationalId || "" } onChange={((e)=>handleHostDetails(e))}/>
                    <input name="dob" type="text" placeholder="DOB as given in ID" value={userInput.hostDetails.dob || "" } onChange={((e)=>handleHostDetails(e))}/>
                    <input name="hostName" type="text" placeholder="Your company name." value={userInput.hostDetails.hostName || "" } onChange={((e)=>handleHostDetails(e))}/>
                    <input name="bankAccountNumber" type="text" placeholder="Bank Account Number" value={userInput.hostDetails.bankAccountNumber || "" } onChange={((e)=>handleHostDetails(e))}/>
                </div>
                
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