import { useContext } from "react";
import logo from "../assets/CFA-logo.png";
import { AuthContext } from "../contexts/AuthContext";
export default function Navbar() {
    const {logout, username} = useContext(AuthContext);
    return (
            <nav className = "flex justify-between px-8 py-4 static top-0 bg-white" >

                <div className = "flex">
                    <a href="/"> <img className = "pr-8 max-h-15" src = { logo }/> </a>
                    <h1 className="text-2xl pt-3">Chatting For All</h1>
                </div>
                
                <div className = "flex self-center">
                    <button className = "mt-1 rounded-3xl bg-zinc-700 px-5 pt-2 pb-3 mb-5 text-xl text-white cursor-pointer"
                        id="login"
                        onClick={()=>{console.log("clicked")
                            logout()}}>
                        Logout
                    </button>
                    <h1 className="pl-10 mt-4 text-xl"> {username} </h1>
                </div>
            </nav>
    );
}