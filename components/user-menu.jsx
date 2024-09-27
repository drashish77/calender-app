"use client";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";
import React from "react";

const UserMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: { avatarBox: "w-10 h-10 border border-red-500" },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Events"
          labelIcon={<ChartNoAxesGantt size={15} />}
          href="/events"
        ></UserButton.Link>
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserMenu;