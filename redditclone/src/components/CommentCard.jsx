import LikeButton from './LikeButton';

export default function CommentCard ({username, date, body, likeCount}) {

    return (
        <div className="flex justify-end">
            <div className="flex bg-purple-50 rounded-lg min-w-4xl max-w-4xl min-h-20 p-5 justify-start flex-col flex-start mt-5 mr-5">
                <div className="text-xs mb-3">
                    <p>{`by ${username} on ${date}`}</p>
                </div>
                <div className="flex bg-purple-100 rounded-lg min-w-3xl pl-5 pr-5 pt-2 min-h-10 flex-col text-xs">
                    <p>{body}</p>
                </div>
                <LikeButton state={false} likeCount={likeCount}/>
            </div>
        </div> 
    );
}

