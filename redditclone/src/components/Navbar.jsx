import logo from "../assets/CFA-logo.png";
export default function Navbar() {
    return (
        <div>
            <nav className = "flex justify-between pl-8 pr-8 pt-4 pb-4" >

                <div className = "flex">
                    <img className = "pr-8 max-h-15" src = { logo }/>
                    <h1 className="text-2xl pt-3">Chatting For All</h1>
                </div>
                
                <div className = "flex  self-center">
                    <button className = "mt-1 rounded-3xl bg-zinc-700 pl-3 pr-3 pt-2 pb-3 mb-5 text-xl text-white"
                        id="login"
                        onClick={()=>login()}
                        >
                        Login / Sign up {/* replace with logout if logged in */}
                    </button>
                    <h1 className="pl-10 mt-4 text-xl">UserName of a User@!!</h1>
                </div>
            </nav>

            {/*
            add logo
            login/logout buttons
            username/profile
            return to home page button
            */}
        </div>
    );
}
