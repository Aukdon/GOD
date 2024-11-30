import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProtectedRouter({component}) {
    
    let token = {}

    try {
        let jwtToken = localStorage.getItem("token");
        token = jwtDecode(jwtToken);
    } catch (error) {
        return <Navigate to="/signin"/>
    }

    if(token.emailId){
        return component
    }

    return <Navigate to="/signin"/>

}

export default ProtectedRouter