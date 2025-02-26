export default function NewComment ({postName, username, timestamp}) {
    return (
        <div className="bg-red-400 w-200 rounded-lg min-h-110 max-h-110 grid justify-items-center">
            <div className="bg-red-400 w-150 min-h-30 max-h-30">
                <h1 className="mt-5 text-2xl pb-2">
                    Write a comment for {postName} post below
                </h1>
                <h2>
                    by: {username}
                </h2>
                <h3>
                    {timestamp} timestamp
                </h3>

            </div>
            <form className="grid justify-items-center gap-3">
                <textarea className="bg-blue-400 w-150 text-center resize-none" placeholder="say what you need to say" rows={10} maxLength={300}>
                
                </textarea>
                <button className="bg-white rounded-lg p-1 mb-2 hover:bg-gray-700" onClick={send} >
                    Submit
                </button>
            </form>

        </div>
    );
}
function send() {
    
}