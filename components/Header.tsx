'use client'
import Link from "next/link";
// import UserButton from "./UserButton";
// import Logo from "./Logo";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import useScroll from "@/hooks/use-scroll";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";

function HeaderWeb() {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

 
  return (
    <div
    className={cn(
      `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
      {
        'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
        'border-b border-gray-200 bg-white': selectedLayout,
      },
    )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-0 items-center justify-center md:hidden"
          >
            <p className="font-bold text-l text-blue-600 flex">Wage</p><span className="font-bold text-l flex">Wire</span>
          </Link>
        </div>

        <div className="hidden md:block">
        <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default HeaderWeb;
