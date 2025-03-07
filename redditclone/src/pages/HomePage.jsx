// import PostCard from "../components/PostCard";
import Modal from "../components/Modal";
import CommentCard from "../components/CommentCard";
import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NewPost from "../components/NewPost";

export default function HomePage() {
    let posts = [
        { username: "username", date: "02/23/24", title: "title", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", title: "title", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", title: "title", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", title: "title", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", title: "title", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", title: "title", body:"Hello this is my post"},
        { username: "username", date: "02/23/24", title: "title", body:"Hello this is my post"}
    ];
    return (
        <main>
            <Navbar/>
            <Sidebar/>
            <div className="flex flex-col overflow-hidden min-h-[calc(100vh-104px)] max-h-[calc(100vh-104px)] grid-flow-col">
                <div className="fixed max-w-300 max-h-180 min-h-180 bg-zinc-700 pr-5 pl-10 border-t-30 border-zinc-700 rounded-t-lg bottom-0 right-15 overflow-y-auto">
                    <Modal Content={NewPost} buttonText={"Add Post"} st={true}/>
                    {posts.map((post)=> (<PostCard username={post.username} date={post.date} title={post.title} body={post.body}/>))}
                    <CommentCard username={"user"} date={"02/23/25"} body={"Hello this is my comment!"}/>
                </div>
            </div>
        </main>
    );
}
