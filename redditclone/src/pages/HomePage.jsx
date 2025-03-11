// import PostCard from "../components/PostCard";
import Modal from "../components/Modal";
import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NewPost from "../components/NewPost";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HomePage() {
    const [posts, setPost] = useState([]);
    const params = useParams();
    const fetchPostsByCommunity = async ()=>{
        const result = await fetch("http://localhost:3000/posts/getposts/"+((params.communityId)?(params.communityId):(0)));
        setPost(await result.json());
    };
    const fetchAllPosts = async()=>{
        const allResult = await fetch("http://localhost:3000/posts/getposts");
        setPost(await allResult.json());
    };
    useEffect(()=>{
        params.communityId==null?(fetchAllPosts()):(fetchPostsByCommunity())
    }, [params.communityId])
    return (
        <main>
            <Navbar/>
            <Sidebar/>
            <div className="flex flex-col overflow-hidden min-h-[calc(100vh-104px)] max-h-[calc(100vh-104px)] grid-flow-col">
                <div className="fixed  min-w-230 max-w-300 max-h-180 min-h-180 bg-zinc-700 pr-5 pl-10 border-t-30 border-zinc-700 rounded-t-lg bottom-0 right-15 overflow-y-auto">
                    {(params.communityId==null)?(<h1 className="text-center text-purple-100">Want to make a post? Choose a community!</h1>):(<Modal Content={NewPost} buttonText={"Add Post"} st={true} communityId={params.communityId}/>)}
                    {(posts[0]==null)?
                    <div className="justify-items-center mt-50">
                            <h1 className="text-purple-100 text-2xl font-bold text-center flex rounded-lg min-h-15 max-w-xs min-w-xs">It's quiet in here...add a post?</h1>
                    </div>
                    :([])}
                    {posts.map((post)=> (<PostCard username={post.postCreator} date={post.postDate} title={post.postHeader} body={post.postContent} postId={post.postId} key={post.postId}/>))}
                </div>
            </div>
        </main>
    );
}
