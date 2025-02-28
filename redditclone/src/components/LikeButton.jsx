import unliked from '../assets/unliked.png';
import liked from '../assets/liked.png';
import { useState } from 'react';

export default function LikeButton({state, likeCount}) {

    const [isliked, setliked] = useState(state);
    const onButtonClicked= ()=>{setliked(!isliked)};
    return(
        <div className='flex flex-row gap-1 mt-3'>
            <button onClick={onButtonClicked}>
                <img className="w-4 ml-1 cursor-pointer" src={isliked?(liked):(unliked)} alt=""/> 
            </button>
            <p className='text-xs'> {likeCount} </p>
        </div>
    );
}