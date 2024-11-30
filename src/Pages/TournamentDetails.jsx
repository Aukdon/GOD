
import Styles from "./TournamentDetails.module.css";
import ShoeImg from "../assets/images/Shoe.png"
import ControllerImg from "../assets/images/Controller.png"
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TournamentDetails(){

    let {id} = useParams();

    let location = useLocation();
    let data = location.state;
    // console.log(data)

    function handleBuy(){
        alert("Redirect to payment");
    }

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
                    <p>{data.tournamentDetails.totalSlots - data.tournamentDetails.slotsBooked} slots available</p>
                    <p className={Styles.textRight}>Total slots: {data.tournamentDetails.totalSlots || "-"}</p>

                </div>
                
                <p>{data.tournamentDetails.description}</p>
            </div>
            <p className={`${Styles.textCenter}`}>Price {data.tournamentDetails.pricePerSlot}/slot</p>
            <div className={Styles.detailsContainer}>
                <p>Category : {data.tournamentType}</p>
                <div className={Styles.textRight}>
                    <Link to="/tournaments" className={Styles.link}>Close</Link>
                    <button onClick={handleBuy}>Buy Now</button>
                </div>
                
            </div>
        </div>
    )
}

export default TournamentDetails