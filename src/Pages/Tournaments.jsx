
import Styles from "./Tournaments.module.css";
import { useState, useEffect } from "react";
import { getAllTournaments } from "../APIs/tournaments.js";
import TournamentCard from "../Components/Tournaments/tournamentCard.jsx";

function Tournaments(){

    let [allTournaments, setAllTournaments] = useState([]);

    async function getAllTournamentsData(){
        let data = await getAllTournaments();
        // console.log(data);
        setAllTournaments(data);
    }

    useEffect(()=>{
        getAllTournamentsData()
    },[])


    return(
        <div className={Styles.container}>
            {allTournaments.map((data)=>(
                <TournamentCard data ={data}  key={data.tournamentId}/>
            ))}
        </div>
    )
}

export default Tournaments