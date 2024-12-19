
import { Link } from "react-router-dom"
import Style from "./MobileMenu.module.css"

function MobileMenu(){
    return(
        <div className={Style.container}>
            <Link to="/myprofile">
                <button>MyProfile</button>
            </Link>
            <Link to="/tournaments">
                <button>Tournaments</button>
            </Link>
            <Link to="/playgrounds">
                <button>Playground</button>
            </Link>
        </div>
    )
};

export default MobileMenu