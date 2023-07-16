import React from "react";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="shadow">
      <div className="container h-20 flex justify-between items-center">
        <span className="text-2xl font-bold text-rose-700">CyberFlix</span>
        <UserNav />
      </div>
    </div>
  );
}
