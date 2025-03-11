import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";

export default function NewPost ({community, communityId, closeHandler}) {
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
            postCreator: username,
            communityId: communityId,
            postDate: date.toUTCString(),
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
            
            fetch("http://localhost:3000/posts/newpost", requestOptions) 
              .then((response) => response.text())
              .then((result) => console.log(result)) 
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
                    by: {username}
                </h2>
                <h3>
                    {date.toUTCString()}
                </h3>
                <div className="grid justify-items-center mb-2">
                    <textarea className="bg-purple-100 text-left resize-none min-w-[100%] max-w-[100%] mt-2 p-5" placeholder="say what you need to say 1500 character limit" rows={10} maxLength={1500} name="body">
                    </textarea>
                </div>

                <button
                type="submit"
                className="rounded-md bg-zinc-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-zinc-800 focus:shadow-none active:bg-zinc-800 hover:bg-zinc-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" >
                    Submit
                </button>

                </form>
            </div>
        </div>
    );
}
