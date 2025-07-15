"use client";
import * as React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@radix-ui/react-navigation-menu";

const ExpandingMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="group p-2 text-white flex">
            Links
          </NavigationMenuTrigger>
          <NavigationMenuContent className="relative left-0 top-0">
            <div className="grid p-4 bg-[#33415566] backdrop-blur-sm rounded-lg text-white">
            <ul>
              <li>
            <NavigationMenuLink asChild>
              <div className="flex">
              <img width={25} src={"/InBug-White.png"}></img>
            <a href="https://www.linkedin.com/in/juan-carlos-carlos-alberto/">LinkedIn</a>
            </div>
            </NavigationMenuLink>
              </li>
              <li>
            <NavigationMenuLink asChild>
              <div className="flex">
              <img width={25} src={"/github-mark-white.png"}></img>
              <a href="https://github.com/TheHighGroundWins/">Github</a>
              </div>
            </NavigationMenuLink>
              </li>
            </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
			<div className="perspective-[2000px] absolute top-full flex w-full">
      <NavigationMenuViewport className="mt-2.5 h-[var(--radix-navigation-menu-viewport-height)]
      w-full origin-top overflow-hidden transition-[width,_height] 
      duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)] 
      data-[state=open]:animate-scaleOut data-[state=close]:animate-scaleIn" />
      </div>
    </NavigationMenu>
    )
}

export default ExpandingMenu