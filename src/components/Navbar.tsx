import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = ({
  navigation,
}: {
  navigation: { name: string; href: string; current: boolean }[];
}) => {
  return (
    <ul
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
       items-center mt-5 sm:mt-0 flex flex-shrink-0 sm:flex-row flex-col w-full gap-6`}
    >
      {navigation.map(({ name, href, current }) => (
        <Link
          key={href}
          href={href}
          className={buttonVariants({
            variant: "default",
            className: cn('flex sm:text-lg flex-row items-center justify-center w-full h-full bg-blue-500', {
                "bg-blue-700 dark:bg-gray-800": current,
                "hover:bg-gray-200 dark:hover:bg-gray-800": !current,
            }),
          })}
        >
          <li>
            <h1 className="text-center w-full h-full">{name}</h1>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
