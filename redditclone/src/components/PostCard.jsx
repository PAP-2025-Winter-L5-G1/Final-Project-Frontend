import LikeButton from "./LikeButton";

export default function PostCard ({username, date, title, body, likeCount}) {
    const shortenText = (text, maxLen) => {
        return text.substring(0, maxLen) + '...';
    };
    return (
        <div className="flex justify-end">
            <div className="flex bg-purple-50 rounded-lg min-w-4xl max-w-4xl min-h-30 p-5 justify-start flex-col flex-start mt-5 mr-5">
                <div className="text-xs">
                    <p>{`by ${username} on ${date}`}</p>
                </div>
                <div className="mb-2">
                    <h2>{title}</h2>
                </div>
                <div className="bg-purple-100 max-h-20 rounded-lg min-w-3xl min-h-20 text-xs px-5 pt-3"> 
                    {shortenText(body, 580)}
                </div>
                <LikeButton state={false} likeCount={likeCount}/>

            </div>
        </div> 
    );
}







