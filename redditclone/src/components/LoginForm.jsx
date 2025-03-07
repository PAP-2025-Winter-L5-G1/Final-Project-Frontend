import { useContext } from "react";
import SeePassword from "./SeePassword";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function LoginForm() {
    const {login, token} = useContext(AuthContext); 
    // const navigate = useNavigate();
    if (token){
        return(
            <Navigate to={"/"}></Navigate>
        );
    } 
    const submit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const submitButton = event.currentTarget.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;
        let data = {
            username: formData.get("username"),
            password: formData.get("password"),
        } 
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            const raw = JSON.stringify(data);
            
            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow"
            };
            
            fetch("http://localhost:3000/auth/login", requestOptions)
              .then((response) => response.text())
              .then((result) => login(result.token, data.username)
                // navigate("/");
              )
              .catch((error) => console.error(error));        } 
              catch (err) {
            console.log(err)
            //insert logic for letting user know auth failed
        }    
    };
    return (
        <div className="flex justify-center m-auto h-screen items-center">
            <div className="flex bg-zinc-700 max-w-lg min-w-md rounded-lg pt-10 pb-20 items-center text-center flex-col">
                <form onSubmit={submit} className="flex bg-zinc-700 max-w-lg min-w-md rounded-lg pt-5 items-center text-center flex-col">
                    <h2 className="block text-3xl font-bold text-violet-200 mb-5"> Welcome! </h2> <br/>
                    <input type="text" className="placeholder-violet-200 text-3xl font-bold text-center flex bg-slate-50 rounded-lg min-h-15 max-w-xs min-w-xs" placeholder="Username" name="username"/> <br/>
                    <SeePassword state={false}/>
                    <div className="flex m-auto min-w-md justify-left pl-17">
                        <p className="flex text-violet-200">New User? <a className="ml-1 cursor-pointer underline" href="/signup">Sign Up Here!</a></p>
                    </div>
                    <button className="min-w-25 min-h-10 bg-violet-200 rounded-md hover:bg-violet-300 mt-5 text-zinc-700 cursor-pointer">
                        Log In
                    </button>
                </form>


            </div>

        </div>
    );
}