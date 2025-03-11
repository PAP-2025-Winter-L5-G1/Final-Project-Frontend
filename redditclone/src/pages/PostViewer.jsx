import { useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import NewComment from "../components/NewComment";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

export default function PostViewer() {
    const { postId } = useParams();
    const [comments, setComment] = useState([]);
    const [post, setPost] = useState([]);
    const fetchPostById = async ()=>{
        const postResult = await fetch("http://localhost:3000/posts/getpostbyid/" + postId);
        const data = await postResult.json();
        setPost(data)
    }; 
    useEffect(()=>{
        fetchPostById();
    },[post.postContent])
    const fetchComments = async ()=>{
        console.log(postId)
        const commentsResult = await fetch("http://localhost:3000/comments/getcomments/"+postId); 
        setComment(await commentsResult.json()); 
    };

    useEffect(()=>{
        fetchComments(); 
    }, [])
    return (
        <main>
            <Navbar/>
            <Sidebar/>
            <div className="flex flex-col overflow-hidden min-h-[calc(100vh-104px)] max-h-[calc(100vh-104px)] grid-flow-col">
                <div className="fixed min-w-230 max-w-300 max-h-180 min-h-180 bg-zinc-700 pr-5 pl-10 border-t-30 border-zinc-700 rounded-t-lg bottom-0 right-15 overflow-y-auto">
                    <Modal Content={NewComment} buttonText={"Add Comment"} st={false}/>
                    <PostCard username={post.postCreator} date={post.postDate} title={post.postHeader} body={post.postContent==null?("loading"):(post.postContent)} postId={post.postId} wholePostView={true}/>
                    <h2 className="mt-5 text-center text-black text-lg">Comments</h2>
                    {comments.map((comment)=> (<CommentCard username={comment.commentCreator} date={comment.commentDate} body={comment.commentContent}/>))}
                </div>
            </div>
        </main>
    );
    
}
