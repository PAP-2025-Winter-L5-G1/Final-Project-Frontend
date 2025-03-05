import eye from '../assets/eye.png';
import eyeOff from '../assets/eyeOff.png';

import { useState } from 'react';

export default function SeePassword(state){     
    const [type, setType] = useState(state);
    const [visible, setVisible] = useState(state);

    const toggleVis = () => {
        setType(!type);
        setVisible(!visible);  
    }
    return (
        <div className='flex flex-col gap-3 justify-start'>
            <input type={type?('password'):('text')} className="placeholder-violet-200 text-3xl font-bold text-center flex bg-slate-50 rounded-lg min-h-15 max-w-xs min-w-xs" placeholder="Password" name="password"/>
            <img className="w-5 h-5" src={visible?(eyeOff):(eye)} alt="" onClick={toggleVis}/>
        </div> 
    );
}