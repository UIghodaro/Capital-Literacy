// TO EXPLAIN. Within App you can have folders with different files that have their own 'page.tsx'. Off of that you create routes to new pages! Hella cool right? Webdev n that

import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
    return(
        <div> 
            <Button>
                DEFAULT
            </Button>
            <Button variant={"primary"}>
                Primary
            </Button>
            <Button variant={"primaryOutline"}>
                Primary [outline]
            </Button>
            <Button variant={"secondary"}>
                Secondary
            </Button>
            <Button variant={"secondaryOutline"}>
                Secondary [outline]
            </Button>
            <Button variant={"danger"}>
                Danger
            </Button>
            <Button variant={"dangerOutline"}>
                Danger [outline]
            </Button>
            <Button variant={"ghost"}>
                Ghost
            </Button>
            <Button variant={"sidebar"}>
                sidebar?
            </Button>
            <Button variant={"sidebarOutline"}>
                sidebar [outline]
            </Button>
        </div>
    );
};

export default ButtonsPage
