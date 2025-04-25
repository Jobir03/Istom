"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { GetData } from "@/services.jsx/data";
import Link from "next/link";

const Navigation = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    GetData("api/v1/product/top-level-categories-with-subcategories/").then(
      (res) => {
        setCategories(res);
      }
    );
  }, []);

  return (
    <nav className="w-full container hidden md:block">
      <NavigationMenu>
        <NavigationMenuList className="space-x-4">
          {categories?.map((category: any) => (
            <NavigationMenuItem key={category?.id}>
              <NavigationMenuTrigger>
                <Link href={`/client/catalogDetail/${category?.id}`}>
                  {category?.name}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {category?.sub_category.map((subCategory: any) => (
                    <Link
                      href={`/client/catalogDetail/${subCategory?.id}`}
                      key={subCategory?.id}
                      className="row-span-3"
                    >
                      {subCategory?.name}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
export default Navigation;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
