let url = `${import.meta.env.VITE_BACKEND_URL}/tournaments`;

async function getAllTournaments(){
    let res = await fetch(url, {
        method : "GET",
        headers : {
            "Content-Type" : "application/json",
        }
    });

    let data = await res.json();
    return data;
};

export {getAllTournaments}