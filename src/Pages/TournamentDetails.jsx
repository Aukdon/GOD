
import Styles from "./TournamentDetails.module.css";
import ShoeImg from "../assets/images/Shoe.png"
import ControllerImg from "../assets/images/Controller.png"
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TournamentDetails(){

    let {id} = useParams();

    let location = useLocation();
    let data = location.state;
    // console.log(data)

    return(
        <div className={`${Styles.card} ${Styles.div}`}>
            <div className={Styles.imgContainer}>
                <img src={(data.tournamentType == "Sports" ? ShoeImg : ControllerImg)} alt="Image" />
            </div>
            <div>
                <div className={Styles.detailsContainer}>
                    <h5>{data.tournamentDetails.title}</h5>
                    <p className={Styles.textRight}>{data.tournamentDetails.date}</p>
                    <p>{data.hostName}</p>
                    <p className={Styles.textRight}>{data.tournamentDetails.time || "Time"}</p>
                </div>
                
                <p>{data.tournamentDetails.description}</p>
            </div>
            <p className={`${Styles.textCenter}`}>{data.tournamentDetails.pricePerSlot}/slot</p>
            <div className={Styles.detailsContainer}>
                <p>Category : {data.tournamentType}</p>
                <div className={Styles.textRight}>
                    <button>Buy Now</button>
                </div>
                
            </div>
        </div>
    )
}

export default TournamentDetails