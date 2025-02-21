import logo from "../assets/CFA-logo.png";
export default function Navbar() {
    return (
            <nav className = "flex justify-between px-8 py-4 sticky top-0 bg-white" >

                <div className = "flex">
                    <img className = "pr-8 max-h-15" src = { logo }/>
                    <h1 className="text-2xl pt-3">Chatting For All</h1>
                </div>
                
                <div className = "flex self-center">
                    <button className = "mt-1 rounded-3xl bg-zinc-700 px-5 pt-2 pb-3 mb-5 text-xl text-white"
                        id="login"
                        onClick={()=>login()}
                        >
                        Login{/* replace with logout if logged in */}
                    </button>
                    <h1 className="pl-10 mt-4 text-xl">UserName of a User@!!</h1>
                </div>
            </nav>
    );
}