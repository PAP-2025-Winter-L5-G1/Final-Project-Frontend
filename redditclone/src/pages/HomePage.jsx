import CommentCard from "../components/CommentCard";
import Navbar from "../components/Navbar";
import NewComment from "../components/NewComment";
import NewPost from "../components/NewPost";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";

export default function HomePage() {

    return (
        <main className="max-h-screen">
            {/* <Navbar/>
            <Sidebar/> */}
            {/* <NewComment/> */}
            {/* <h1 className="text-3xl font-bold underline"> Home page </h1> */}
            <Modal Content = {NewComment} buttonText={"Add Post"} st={false}/>
        </main>
    );
}
