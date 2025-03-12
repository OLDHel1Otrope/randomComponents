import Dock from "@/components/dock";
const DesktopView=()=>{
    return(
        <div>
            <div className="flex flex-col w-20">
                <Dock/>
            </div>
            <div className="flex flex-row w-full h-full">

            </div>
        </div>
    )
}

export default DesktopView;