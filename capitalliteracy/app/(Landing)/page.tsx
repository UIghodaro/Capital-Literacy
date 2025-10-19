import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return(
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className= "flex justify-center items-center relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/TheCapitalOne.png" fill alt="CappyOne"/>
      </div>
      <div className = "flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-rose-500 max-w-[480px] text-center">
          Improve financial literacy with Capital One, a day at a time!
        </h1>
        <div>
          <Button asChild size = "lg" variant = "secondary" className = "w-full">
            <Link href="/courses">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
