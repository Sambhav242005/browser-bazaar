"use client";

import { Home, Menu } from "lucide-react";
import Navbar from "./Navbar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Navbars() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 h-20 w-full sticky z-50 flex justify-between sm:justify-start items-center">
      <div className="flex items-center justify-center mx-4 my-4">
        <Home className="w-8 h-8 text-gray-800" />
      </div>

      {/* DO : Navbar for higher resolution screen */}
      <div className="hidden sm:flex">
        <Navbar navigation={navigation} />
      </div>

      {/* DO : Navbar for lower resolution screen */}
      <div className="flex sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="h-8 w-8 m-7 items-center text-gray-800 justify-center flex hover:text-gray-500" />
          </SheetTrigger>
          <SheetContent>
            <Navbar navigation={navigation} />
          </SheetContent>
        </Sheet>
      </div>
      <Separator orientation="vertical" className="bg-gray-400 ml-auto hidden lg:block py-4 " />
      <div className="m-10 lg:flex hidden flex-row items-center justify-center gap-6">
        <Link
          href={"/login"}
          className={buttonVariants({
            variant: "default",
            className: "bg-blue-500 sm:text-lg hover:bg-blue-600",
          })}
        >
          Login
        </Link>
        <Link
          href={"/registration"}
          className={buttonVariants({
            variant: "default",
            className: "bg-blue-500 sm:text-lg hover:bg-blue-600",
          })}
        >
          Registration
        </Link>
      </div>
    </nav>
  );
}
