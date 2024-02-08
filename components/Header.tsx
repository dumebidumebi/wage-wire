import Link from "next/link";
// import UserButton from "./UserButton";
// import Logo from "./Logo";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

async function Header() {
 
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900  max-w-7xl mx-auto">
        {/* <Logo /> */}

        <div className="flex-1 flex items-center justify-end  space-x-4">
        <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
        </div>
      </nav>
    </header>
  );
}

export default Header;
