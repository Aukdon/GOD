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

// Create a User

async function signUpApi(payload){
    let res = await fetch(`${url}/signup`, {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(payload)
    });
    let data = await res.json();
    return data
}

export {signInApi, signUpApi}