import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function RouteGuard({children}) {
    const {token} = useContext(AuthContext);
    if(token) {
        return(
            children
        );
    }
    return (
        <Navigate to={"/login"}/>

    );
}