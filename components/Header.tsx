'use client'
import Link from "next/link";
import {
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import useScroll from "@/hooks/use-scroll";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import HeaderMobile from "./header-mobile";

function HeaderWeb() {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
    className={cn(
      `sticky inset-x-0 top-0 z-30 max-w-full transition-all border-b border-gray-200 `,
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
            className="flex flex-row space-x-0 items-center justify-center  position-fixed top-0 left-40 z-50 "
          >
            <p className="font-bold text-l text-blue-600 flex">Wage</p><span className="font-bold text-l flex">Wire</span>
          </Link>
          
        </div>
        <div className="mx-40"></div>
        <div>
        <div className=" flex space-x-5 absolute right-10 mx-5 top-[8px] z-30">
        <SignedIn>
        <UserButton />

        <OrganizationSwitcher createOrganizationUrl="/clerk/create-org"/>
        <div className="flex items-center space-x-4">
        <HeaderMobile/>
        </div>
        </SignedIn>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderWeb;
