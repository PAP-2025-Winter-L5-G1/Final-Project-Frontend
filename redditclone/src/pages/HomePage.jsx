import CommentCard from "../components/CommentCard";
import Navbar from "../components/Navbar";
import NewComment from "../components/NewComment";
import Sidebar from "../components/Sidebar";

export default function HomePage() {

    return (
        <main className="max-h-screen">
            {/* <Navbar/>
            <Sidebar/> */}
            <NewComment/>
            {/* <h1 className="text-3xl font-bold underline"> Home page </h1> */}
        </main>
    );
    
}
