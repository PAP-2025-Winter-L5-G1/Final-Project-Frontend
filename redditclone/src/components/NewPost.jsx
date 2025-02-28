export default function NewPost ({username, timestamp, community, closeHandler}) {

    const submit = (e)=>{
        e.preventDefault();
        closeHandler();
        try{

        }catch{

        }
    }
    return (
        <div className="min-w-[95%] max-w-[95%] rounded-lg min-h-110 max-h-110 grid justify-items-center">
            <div className="min-w-[95%] max-w-[95%] min-h-30 max-h-30">

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
                <textarea className="bg-blue-400 text-center resize-none min-w-[400%] max-w-[400%] mb-2" placeholder="say what you need to say 300 charter limit" rows={10} maxLength={300}>
                </textarea>

                <button
                className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" 
                onClick={submit}>
                    Submit
                </button>
            </form>
        </div>
    );
}
