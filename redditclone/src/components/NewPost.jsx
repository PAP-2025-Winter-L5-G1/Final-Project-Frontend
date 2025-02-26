export default function NewPost ({username, timestamp, community}) {
    return (
        <div className="bg-red-400 min-w-[95%] max-w-[95%] rounded-lg min-h-110 max-h-110 grid justify-items-center">
            <div className="bg-red-400 min-w-[95%] max-w-[95%] min-h-30 max-h-30">

                <form className="mt-5">
                    <textarea className="resize-none min-w-[50%] max-w-[50%] text-2xl" placeholder="Enter Post Header Here" rows={1} maxLength={100}>
                    </textarea>
                </form>
                <h2>
                    [{community}] by: {username}
                </h2>
                <h3>
                    {timestamp} timestamp
                </h3>

            </div>
            <form className="grid justify-items-center mb-5">
                <textarea className="bg-blue-400 text-center resize-none min-w-[350%] max-w-[350%]" placeholder="say what you need to say 300 charter limit" rows={12} maxLength={300}>
                </textarea>
            </form>
        </div>
    );
}