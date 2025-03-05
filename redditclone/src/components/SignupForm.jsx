import SeePassword from "./SeePassword";

export default function SignupForm() {
    const submit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const submitButton = event.currentTarget.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;
        let data = {
            username: formData.get("username"),
            password: formData.get("password"),
            // confirmPassword: formData.get("confirmPassword")
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
            
            fetch("http://localhost:3000/auth/register", requestOptions)
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.error(error));        
        } catch (err) {
            console.log(err)
        }    
    };
    return (
        <div className="flex justify-center m-auto h-screen items-center">
            <div className="flex bg-zinc-700 max-w-lg min-w-md rounded-lg pt-10 pb-20 items-center text-center flex-col">
                <form onSubmit={submit} className="flex bg-zinc-700 max-w-lg min-w-md rounded-lg pt-5 items-center text-center flex-col">
                    <h2 className="block text-3xl font-bold text-violet-200 mb-5"> Welcome! </h2> <br/>
                    <input type="text" className="placeholder-violet-200 text-2xl font-bold text-center flex bg-slate-50 rounded-lg min-h-15 max-w-xs min-w-xs" placeholder="Create Username" name="username"/> <br/>
                    <SeePassword state={false}/> <br/>
                    {/* <input type="text" className="placeholder-violet-200 text-2xl font-bold text-center flex bg-slate-50 rounded-lg min-h-15 max-w-xs min-w-xs" placeholder="Confirm Password" name="confirmPassword"/> <br/> */}
                    <button className="min-w-25 min-h-10 bg-violet-200 rounded-md hover:bg-violet-300 mt-10 text-zinc-700 cursor-pointer"
                    type="submit">
                        Sign Up
                    </button>
                </form>

            </div>

        </div>
    );
}