import { FeedWrapper } from "@/components/ui/feed wrapper";
import { StickyWrapper } from "@/components/ui/sticky wrapper";
import { Header } from "./Header";
import { UserProgress } from "@/components/ui/user progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async () => {
    const userProgressData = getUserProgress();

    const [
        userProgress
    ] = await Promise.all([userProgressData])

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }


    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse = {{ title: "Income vs Expenditure", imageSrc: "/Questsbckgrnd.png"}}
                    hearts = {5}
                    points = {100}
                />
            </StickyWrapper> 
            <FeedWrapper>
                <Header title = "Income vs Expenditure"/>
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;
