
import Style from "./Layout.module.css"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar.jsx"
import Header from "./Header/Header.jsx"

function Layout() {
    return(
        <div className={Style.layout}>
            
            <div className={Style.sidebarContainer}>
                <Sidebar/>
            </div>

            <div className={Style.content}>
                <Header/>
                <Outlet/>
            </div>

        </div>
    )   
}

export default Layout