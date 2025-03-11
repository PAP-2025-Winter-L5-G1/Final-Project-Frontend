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
                    {params.communityId==null?([]):(<Modal Content={NewPost} buttonText={"Add Post"} st={true} communityId={params.communityId}/>)}
                    {posts.map((post)=> (<PostCard username={post.postCreator} date={post.postDate} title={post.postHeader} body={post.postContent} postId={post.postId} key={post.postId}/>))} {/* GET COMMUNITY NAME/USERNAME */}
                </div>
            </div>
        </main>
    );
}
