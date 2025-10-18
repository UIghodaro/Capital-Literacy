import { FeedWrapper } from "@/components/feed wrapper";
import { StickyWrapper } from "@/components/ui/sticky wrapper";
import { Header } from "./Header";
import { UserProgress } from "@/components/user progress";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse = {{ title: ""}}
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
