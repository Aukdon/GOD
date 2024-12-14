import { Link } from "react-router-dom"
import Style from "./Sidebar.module.css"
import {sidebarData} from "./SidebarData.js"
import { hostData } from "./SidebarData.js"
import PowerButtonIcon from "../../assets/icons/Power_Button.png"
import ControlsIcon from "../../assets/icons/Controls.png"

function Sidebar(){

    

    //Clear token to sign out user
    function handleSignOut(){
        localStorage.setItem("token", "")
    }
    
    return(
        <>

            <div className={`${Style.sidebar}`}>

                {/* Displaying all sidebar list using map function */}

                <div className={Style.appName}>
                    <h3>Game</h3>
                    <h3>Of</h3>
                    <h3>Domination</h3>
                </div>

                <p className={Style.sectionHeadings}>Book Now</p>

                {sidebarData.map((data,index)=>(
                    <Link to={data.path} className={Style.list} key={index}>
                        <div className={Style.listIcon}>
                            <img src={data.icon} alt={data.title} />
                        </div>
                        <div className={Style.listTitle}>{data.title}</div>
                    </Link>
                ))}

                <p className={Style.sectionHeadings}>Host Now</p>

                {hostData.map((data,index)=>(
                    <Link to={data.path} className={Style.list} key={index}>
                        <div className={Style.listIcon}>
                            <img src={data.icon} alt={data.title} />
                        </div>
                        <div className={Style.listTitle}>{data.title}</div>
                    </Link>
                ))}

                <p className={Style.sectionHeadings}>Controls</p>

                {/* Settings page */}
                <Link to="/myprofile" className={Style.list} >
                        <div className={Style.listIcon}>
                            <img src={ControlsIcon} alt="Controls Icon" />
                        </div>
                        <div className={Style.listTitle}>My Profile</div>
                </Link>

                {/* Power Off button */}
                <div className={Style.list} >
                        <div className={Style.listIcon}>
                            <img src={PowerButtonIcon} alt="Power Button Icon" />
                        </div>
                        <div className={Style.listTitle}>
                            <Link to="/signin" onClick={handleSignOut}>Sign Out</Link>
                        </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar