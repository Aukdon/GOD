let url = `${import.meta.env.VITE_BACKEND_URL}`;

async function signInApi(payload){
    let res = await fetch(`${url}/signin`, {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(payload)
    });
    let data = await res.json();
    // console.log(data);
    return data
}

export {signInApi}