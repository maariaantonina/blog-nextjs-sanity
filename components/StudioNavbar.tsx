import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

function StudioNavbar(props:any) {
    return(
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href="/" className="text-[#F2CC8F] flex items-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#F2CC8F] mr-2"></ArrowUturnLeftIcon>
                    Go to Website</Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar