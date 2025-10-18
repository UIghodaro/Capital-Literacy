import Link from "next/link";
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
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                [Logo.png]
                <h1 className="text = 2x1 font-extrabold text-blue-900 tracking-wide">
                   Capital Literacy 
                </h1>
            </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label={"Learn"} iconSrc={""} href={"/Learn"} />
                <SidebarItem label={"Quests"} iconSrc={""} href={"/Quests"} />
                <SidebarItem label={"Help"} iconSrc={""} href={"/Help"} />
                <SidebarItem label={"About"} iconSrc={""} href={"/About"} />
            </div>
        </div>
    );
};
