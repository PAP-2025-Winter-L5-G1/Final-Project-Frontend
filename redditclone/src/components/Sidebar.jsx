import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar () {
        const [communities, setCommunity] = useState([]);
        const navigate = useNavigate();
        const fetchCommunities = async ()=>{
            const result = await fetch("http://localhost:3000/communities"); 
            setCommunity(await result.json()); 
        }
        useEffect(()=>{
            fetchCommunities(); 
        }, [])
    return (
        <div className="min-h-[calc(100vh-104px)] max-h-[calc(100vh-104px)] bg-zinc-700 w-75 rounded-tr-xl flex fixed flex-col items-center gap-4 pt-4 pb-6 overflow-auto">

            {communities.map((community) => {
                return (
                <button onClick={()=>{navigate("/"+community.communityId)}} className = "min-h-10 w-65 text-xl rounded-xl bg-purple-50 text-center truncate px-5 justify-center pt-1 cursor-pointer"> 
                    {community.communityName} 
                </button>)
            })}
            {/* <CommunityButton communityLink="joinMoreCommunities" communityName="join more!"/> */}
        </div>
    );
}

function CommunityButton(props) {
    return (
        <button className = "min-h-10 w-65 text-xl rounded-xl bg-purple-50 text-center truncate px-5 justify-center pt-1">
                    href={props.communityLink}

                {props.communityName}
        </button>
    );

}
