
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "../Pages/Home.jsx"
import Tournaments from "../Pages/Tournaments.jsx"
import Playgrounds from "../Pages/Playgrounds.jsx"
import HostTournaments from "../Pages/HostTournaments.jsx"
import HostPlaygrounds from "../Pages/HostPlaygrounds.jsx"
import TournamentDetails from "../Pages/TournamentDetails.jsx"
import SignIn from "../Authentication/SignIn.jsx"
import SignUp from "../Authentication/SignUp.jsx"
import PasswordReset from "../Authentication/PasswordReset.jsx"
import MyProfile from "../Pages/MyProfile.jsx"

import ProtectedRouter from "../Authentication/ProtectedRoutes.jsx"


function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProtectedRouter component={<Layout/>}/>}>
                        <Route index element={<Tournaments/>}/>
                        <Route path="/tournaments" element={<Tournaments/>} />
                        <Route path="/playgrounds" element={<Playgrounds/>} />
                        <Route path="/hosttournament" element={<HostTournaments/>} />
                        <Route path="/hostplaygrounds" element={<HostPlaygrounds/>} />
                        <Route path="/tournamentId/:id" element={<TournamentDetails/>} />
                        <Route path="/myprofile/" element={<MyProfile/>} />
                    </Route>
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/passwordreset" element={<PasswordReset/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes