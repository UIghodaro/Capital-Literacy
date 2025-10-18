
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}
