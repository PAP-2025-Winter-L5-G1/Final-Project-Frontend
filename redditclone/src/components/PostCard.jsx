import { useNavigate } from "react-router-dom";
import LikeButton from "./LikeButton";
import { useEffect, useState } from "react";

export default function PostCard ({username, date, title, body, postId, wholePostView}) {
    const shortenText = (text, maxLen) => {
        return text.substring(0, maxLen);
    };
    const navigate = useNavigate();

    return (
        <div className="flex justify-end">
            <div className="flex bg-purple-50 rounded-lg min-w-4xl max-w-4xl min-h-30 p-5 justify-start flex-col flex-start mt-5 mr-5">
                <div className="text-xs">
                    <p>{`by ${username} on ${date}`}</p>
                </div>
                <div className="mb-2">
                    <h2>{title}</h2>
                </div>
                {wholePostView?(
                    <>
                    <div className="bg-purple-100 max-h-20 rounded-lg min-w-3xl min-h-53 text-xs px-5 pt-3"> 
                    {body}
                    </div>
                    <LikeButton state={false} postId={postId}/>
                    </>
                ):(
                    <>
                    <div className="bg-purple-100 max-h-20 rounded-lg min-w-3xl min-h-20 text-xs px-5 pt-3"> 
                        {shortenText(body, 330)+"..."}
                        <button className="cursor-pointer underline" onClick={()=>{navigate("/post/"+postId)}}> 
                            See More
                        </button>
                    </div>
                    <LikeButton state={false} postId={postId}/>
                    </>

                    
                )}

            </div>
        </div> 
    );
}







