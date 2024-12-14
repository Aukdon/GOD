import { useState } from "react";
import Style from "./HostTournaments.module.css"

function HostTournaments(){

    let [userInput, setUserInput] = useState({});

    function handleChange(e){
        e.preventDefault();
        setUserInput({
            ...userInput,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(userInput)
    }

    return(
        <div>
            <form action="submit" className={Style.form}>
                <div className={Style.inputContainer}>
                    <label htmlFor="organiser">Organiser name</label>
                    <input name="organiser" type="text" onChange={handleChange} value={userInput.organiser || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="tournamentType">Tournament type</label>
                    <select id="tournamentType" name="tournamentType" onChange={handleChange} value={userInput.tournamentType || ""}>
                        <option value="">Select</option>
                        <option value="E-Sports">E-Sports</option>
                        <option value="Sports">Sports</option>
                    </select>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="gameName">Game name</label>
                    <input name="gameName" type="text" onChange={handleChange} value={userInput.gameName || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="tournamentTitle">Tournament title</label>
                    <input name="tournamentTitle" type="text" onChange={handleChange} value={userInput.tournamentTitle || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="totalPrize">Total prize pool</label>
                    <input name="totalPrize" type="number" onChange={handleChange} value={userInput.totalPrize || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="totalSlots">Total slots</label>
                    <input name="totalSlots" type="number" onChange={handleChange} value={userInput.totalSlots || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="date">Tournament date</label>
                    <input name="date" type="date" onChange={handleChange} value={userInput.date || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="time">Tournament start time</label>
                    <input name="time" type="time" onChange={handleChange} value={userInput.time || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="lastDate">Last day to register</label>
                    <input name="lastDate" type="date" onChange={handleChange} value={userInput.lastDate || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="currency">Currency</label>
                    <select name="currency" onChange={handleChange} value={userInput.currency || ""}>
                        <option value="">Select</option>
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="pricePerSlot">Price per slots</label>
                    <input name="pricePerSlot" type="number" onChange={handleChange} value={userInput.pricePerSlot || ""}/>
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="country">Country</label>
                    <input name="country" type="text" onChange={handleChange} value={userInput.country || ""}/>
                </div>
                <div className={`${Style.inputContainer} ${Style.span}`}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" rows={5} onChange={handleChange} value={userInput.description || ""}></textarea>
                </div>
                <div className={`${Style.inputContainer}`}>
                    <button onClick={handleSubmit} type="submit">Post</button>
                </div>
            </form>
        </div>
    )
}

export default HostTournaments