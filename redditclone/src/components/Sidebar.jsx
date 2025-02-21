export default function Sidebar () {
    let communites = [
        {communityLink: "xPage", communityName: "x"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "zPage", communityName: "z"},
        {communityLink: "xPage", communityName: "x"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "zPage", communityName: "z"},
        {communityLink: "xPage", communityName: "x"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "zPage", communityName: "z"},
        {communityLink: "xPage", communityName: "x"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "zPage", communityName: "z"},
        {communityLink: "xPage", communityName: "x"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        {communityLink: "alphebetPage", communityName: "abcdefghijklmnopqrstuvwxyz"},
        ];
    return (
        <div className="max-h-[calc(100vh-104px)] bg-zinc-700 w-75 rounded-tr-xl flex flex-col items-center gap-4 pt-4 overflow-y-scroll pb-6">

            {communites.map((community) => {
                return <CommunityButton communityLink={community.communityLink} communityName={community.communityName}/>
            })}
        </div>
    );
}

function CommunityButton(props) {
    return (
        <a className = "min-h-10 w-65 text-xl rounded-xl bg-purple-50 text-center truncate px-5 justify-center pt-1"
        href={props.communityLink}
        >
        {props.communityName}
    </a>
    );

}
