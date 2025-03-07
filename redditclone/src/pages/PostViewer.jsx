import CommentCard from "../components/CommentCard";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import NewComment from "../components/NewComment";
import Sidebar from "../components/Sidebar";

export default function PostViewer() {
    let comments = [
        { username: "username", date: "02/23/24", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", body:"Hello this is my post"},        
        { username: "username", date: "02/23/24", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", body:"Hello this is my post"}

    ];
    return (
        <main>
            <Navbar/>
            <Sidebar/>
            <div className="flex flex-col overflow-hidden min-h-[calc(100vh-104px)] max-h-[calc(100vh-104px)] grid-flow-col">
                <div className="fixed max-w-300 max-h-180 min-h-180 bg-zinc-700 pr-5 pl-10 border-t-30 border-zinc-700 rounded-t-lg bottom-0 right-15 overflow-y-auto">
                    <Modal Content={NewComment} buttonText={"Add Comment"} st={false}/>
                    
                    {/* pull up post that user clicked on */}

                    {comments.map((comment)=> (<CommentCard username={comment.username} date={comment.date} body={comment.body}/>))}
                    <CommentCard username={"user"} date={"02/23/25"}ß body={"Hello this is my comment!"}/>
                </div>
            </div>
        </main>
    );
    
}
