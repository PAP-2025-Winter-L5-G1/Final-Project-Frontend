import logo from "../assets/CFA-logo.png";
export default function Navbar() {
    return (
        <div>
            <nav className = "flex justify-between pl-8 pr-8 pt-4 pb-4" >

                <div className = "flex">
                    <img className = "pr-8" src = { logo }/>
                    <h1>Chatting For All</h1>
                </div>
                
                <div className = "flex">
                    <button className = "rounded-md pl-2 pr-2 pb-1 pt-1 bg-indigo-500"
                        id="login"
                        onClick={()=>login()}
                        >
                        Login / Sign up
                    </button>
                    <h1>User</h1>
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