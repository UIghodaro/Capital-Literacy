import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebarItem";

type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return (
        <div className = {cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
    )}>
            <Link href="/Learn">
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 bg-blue-800">
                <Image src="/TheCapitalOne.png" height = {40} width = {40} alt="Mascot"/>
                <h1 className="text = 2x1 font-extrabold text-white tracking-wide">
                   Capital Literacy 
                </h1>
            </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label={"Learn"} iconSrc={"/Learnbckgrnd.png"} href={"/Learn"} />
                <SidebarItem label={"Quests"} iconSrc={"/Questsbckgrnd.png"} href={"/Quests"} />
                <SidebarItem label={"Help"} iconSrc={"/Helpbckgrnd.png"} href={"/Help"} />
            </div>
        </div>
    );
};
