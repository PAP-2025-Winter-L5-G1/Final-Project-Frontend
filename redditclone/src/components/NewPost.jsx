import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function NewPost ({community, communityId, userId, closeHandler}) {
    const date = new Date();
    const { username, token } = useContext(AuthContext);
    const submit = (e)=>{
        e.preventDefault();
        closeHandler();
        const formData = new FormData(e.currentTarget);
        const submitButton = e.currentTarget.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = true;
        let data = {
            postHeader: formData.get("header"),
            postContent: formData.get("body"),
            communityId: communityId,
            userId: userId,
            commentDate: date,
            token: token
        } 
        try{
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            const raw = JSON.stringify(data);
            
            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow"
            };
            
            fetch("http://localhost:3000/posts/newpost", requestOptions) // change route when created in backend
              .then((response) => response.text())
              .then((result) => console.log(result)) //change ?
              .catch((error) => console.error(error));
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="min-w-[95%] max-w-[95%] rounded-lg min-h-110 max-h-110 grid justify-items-center">
            <div className="min-w-[95%] max-w-[95%] min-h-30 max-h-30">

                <form id="postHead" className="mt-5" onSubmit={submit}>
                    <textarea className="resize-none min-w-[50%] max-w-[50%] text-2xl" placeholder="Enter Post Header Here" rows={1} maxLength={100} name="header">
                    </textarea>
                <h2>
                    [{community}] by: {username}
                </h2>
                <h3>
                    {date.toUTCString()}
                </h3>
                <div className="grid justify-items-center mb-5">
                    <textarea className="bg-blue-400 text-center resize-none min-w-[100%] max-w-[100%] mb-2" placeholder="say what you need to say 300 charter limit" rows={10} maxLength={300} name="body">
                    </textarea>
                </div>

                <button
                type="submit"
                className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" >
                    Submit
                </button>

                </form>
            </div>
        </div>
    );
}
