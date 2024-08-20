import { createContext, useEffect, useState } from "react";

export let UserContext=createContext()

export default function UserContextprovider({children})
{
    const [userdata, setuserdata] = useState(null)
    useEffect(()=>{
        if(localStorage.getItem('usertoken'))
        {
            setuserdata(localStorage.getItem('usertoken'))
        }
    },[])
    return<UserContext.Provider value={{userdata,setuserdata}}>
        {children}

    </UserContext.Provider>
}