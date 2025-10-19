import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";

type Props = {
    activeCourse: { imageSrc: string; title: string }; 
    hearts: number;
    points: number;
}

export const UserProgress = ( { activeCourse, hearts, points }: Props) => {
    return (
        <div className = "flex items-center justify-between gap-x-2 w-full">
            <Link href = "/courses">
                <Button variant="ghost">
                    <Image 
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={32}
                        height={32}
                    />
                </Button>
                User Progress
            </Link>
            <div className="text-orange-500">
                <Image src="/Energy.png" height={28} width={28} alt="Points" className="mr-2" />{points}
            </div>
            <div className="text-rose-500">
                <Image src="/Hearts.png" height={28} width={28} alt="Hearts" className="mr-2" />{hearts}
            </div>
        </div>
    );
};
