import React from 'react';
import {Navigate} from 'react-router-dom';
import {useUserAuth} from "../../context/Auth";
function ProtectedRoutes({children}) {
    let {user} = useUserAuth();
    if(!user){
       return <Navigate to="/account"/>
    }
  return children;
}

export default ProtectedRoutes;