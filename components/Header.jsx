import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex justify-between px-5 mx-auto py-2 items-center shadow-md border-b-2">
      <Link href="/">
        <div className="relative h-10 w-40">
          <Image src="/logo.svg" alt="logo" layout="fill" objectFit="contain" />
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <Link href={"/events?create=true"}>
          <Button>
            <PenBox size={18} className="mr-1" /> Create Event
          </Button>
        </Link>
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
