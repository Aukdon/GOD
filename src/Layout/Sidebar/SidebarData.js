
import Cards from "../../assets/icons/Cards.png"
import Flag_On_Ground from "../../assets/icons/Flag_On_Ground.png"
import Power_Button from "../../assets/icons/Power_Button.png"

//To see all tournaments, playgrounds and book
let sidebarData = [
    {
        "path" : "/tournaments",
        "title" : "Tournament",
        "icon" : Cards
    },
    {
        "path" : "/playgrounds",
        "title" : "Playgrounds",
        "icon" : Flag_On_Ground
    }
]

// To host tournaments and playgrounds by users
let hostData = [
    {
        "path" : "/hosttournament",
        "title" : "Host Tournament",
        "icon" : Cards
    },
    {
        "path" : "/hostplaygrounds",
        "title" : "Host Playgrounds",
        "icon" : Flag_On_Ground
    }
]

export {sidebarData, hostData}