import { LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS, LOGOUT_REQ } from "./ActionType"


export const loginReq=()=>{
    return{
        type:LOGIN_REQ
    }
}
export const loginSuccess=(payload)=>{
    return{
        type:LOGIN_SUCCESS,
        payload,
    }
}

export const loginFail=()=>{
    return{
        type:LOGIN_FAIL
    }
}

export const loginProcess=(userdetails,mobile)=>(dispatch)=>{
    console.log("login")
    dispatch(loginReq())
    let payload= userdetails.filter(item=>item.mobilenumber == mobile)
    payload=payload[0]
    if(payload === undefined){
        alert("User not found")
        dispatch(loginFail())
    }
    else{
       
        
        alert(`Welcome Back ${payload.username} `)
        dispatch(loginSuccess(payload))
    }
}

export const logoutReq=()=>{
    return{
        type:LOGOUT_REQ
    }
}
