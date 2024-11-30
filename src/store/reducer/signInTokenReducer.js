
let initialState = {
    token: ""
}

let signInTokenReducer = (state = initialState, action) => {
    switch(action.type){
        case "signIn":
            return{
                ...state,
                token: action.token
                // token: "signed in"
            };
        case "signOut":
            return{
                ...state,
                token: ""
            };
        default:
            return state
    }
}

export default signInTokenReducer