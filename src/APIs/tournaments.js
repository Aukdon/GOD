let url = `${import.meta.env.VITE_BACKEND_URL}/tournaments`;

async function getAllTournaments(){

    let token = localStorage.getItem("token");
    // console.log(token)

    let res = await fetch(url, {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : token
        }
    });

    let data = await res.json();
    return data;
};

export {getAllTournaments}