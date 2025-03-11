import unliked from '../assets/unliked.png';
import liked from '../assets/liked.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export default function LikeButton({state, postId}) {
    const [isliked, setliked] = useState(state);
    const [likeCount, setLikeCount] = useState([])
    const { token } = useContext(AuthContext); 
    const fetchLikeCount = async ()=>{
        const result = await fetch("http://localhost:3000/likes/count/"+postId);
        const numOfLikes = await result.json()
        setLikeCount(numOfLikes.likeCount);
    };
    const fetchLikeStatus = async () => {
        try {
            const response = await fetch(`http://localhost:3000/likes/status/${postId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const statusData = await response.json();
            setLikeCount(statusData.likeCount.likeCount);
            setliked(statusData.userLiked); 
        } catch (error) {
            console.error("Error fetching like status:", error);
        }
    };
    const fetchLikeToggle = async () => {
        try {
            const toggleResult = await fetch(`http://localhost:3000/likes/toggle/${postId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const data = await toggleResult.json();
            if(data){
                setliked((prev) => !prev);  
                setLikeCount((prev) => prev + (isliked ? -1 : 1));
            }

        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };
    useEffect(()=>{
        fetchLikeCount();
    }, []);

    useEffect(() => {
        fetchLikeStatus();
    }, []);

    const onButtonClicked= ()=>{
        fetchLikeToggle()
    }
    return(
        <div className='flex flex-row gap-1 mt-3'>
            <button onClick={onButtonClicked}>
                <img className="w-4 ml-1 cursor-pointer" src={isliked?(liked):(unliked)} alt=""/> 
            </button>
            <p className='text-xs'> {likeCount} </p>
        </div>
    );
}