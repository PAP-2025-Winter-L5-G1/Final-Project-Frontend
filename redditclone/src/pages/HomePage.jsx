// import PostCard from "../components/PostCard";

import CommentCard from "../components/CommentCard";
import PostCard from "../components/PostCard";

export default function HomePage() {

    return (
        <main>
            <div className="flex flex-col overflow-hidden h-screen grid-flow-col">
                <div className="fixed max-w-300 max-h-180 min-h-180 bg-zinc-700 pr-5 pl-10 border-t-80 border-zinc-700 rounded-t-lg bottom-0 right-15 overflow-y-auto">
                    {/* ADD MAP FOR POSTS */}
                    <PostCard username={"user"} date={"02/23/25"} title={"title"} body={"Hello this is my post"}/>
                    <CommentCard username={"user"} date={"02/23/25"}ß body={"Hello this is my comment!"}/>
                </div>
            </div>
        </main>
    );
    
}
