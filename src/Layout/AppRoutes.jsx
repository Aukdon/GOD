
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "../Pages/Home.jsx"
import Tournaments from "../Pages/Tournaments.jsx"
import Playgrounds from "../Pages/Playgrounds.jsx"

function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Tournaments/>}/>
                        <Route path="/tournaments" element={<Tournaments/>} />
                        <Route path="/playgrounds" element={<Playgrounds/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes