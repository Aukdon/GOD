import { Link } from "react-router-dom"
import Style from "./Sidebar.module.css"
import sidebarData from "./SidebarData"

function Sidebar(){
    
    return(
        <div className={Style.sidebar}>

            {/* Displaying all sidebar list using map function */}
            
            <div className={Style.appName}>
                <p>GOD</p>
                <p>Game Of Domination</p>
            </div>

            {sidebarData.map((data,index)=>(
                <Link to={data.path} className={Style.list} key={index}>
                    <div className={Style.listIcon}>
                        <img src={data.icon} alt="Trophy_Icon" />
                    </div>
                    <div className={Style.listTitle}>{data.title}</div>
                </Link>
            ))}

        </div>
    )
}

export default Sidebar