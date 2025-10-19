import { LessonButton } from "./lesson button";
import { UnitBanner } from "./unit-banner";

export const Unit = () => {
    const isCurrent = 1;
    const isLocked = !isCurrent;
    return (
        <>
        <UnitBanner title={"Income vs Expenditure"} description={"Learn the meaning of Income, Expenditure and how to manage them to keep your money on the way up!"} />
        <div className = "flex items-center flex-col relative">

                <LessonButton
                    id="1"
                    index={1}
                    totalCount = {4}
                    current = {true || isCurrent}
                    locked = {isLocked}
                    percentage = {40}
                    isCompleted = {false}
                />

        </div>

    </>
    );
};
