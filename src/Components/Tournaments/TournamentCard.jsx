
import Styles from "./TournamentCard.module.css"
import ShoeImg from "../../assets/images/Shoe.png"
import ControllerImg from "../../assets/images/Controller.png"
import { Link } from "react-router-dom"

function TournamentCard({data}){
    
    return(
        <Link to={`/tournamentId/${data.tournamentId}`} state = {data} className={`${Styles.card} ${Styles.link}`}>
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
                
                <p>{data.tournamentDetails.description.slice(0,100)}...more</p>
            </div>
            <p className={Styles.textCenter}>{data.tournamentDetails.pricePerSlot} / slot</p>
            <div className={Styles.detailsContainer}>
                <p>Category : {data.tournamentType}</p>
                <div className={Styles.textRight}>
                    <button>Buy Now</button>
                </div>
                
            </div>
        </Link>
    )
}

export default TournamentCard