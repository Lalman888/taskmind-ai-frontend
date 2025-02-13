"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../animation-container";
import { NAV_LINKS } from "@/constants/nav-links";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-16 w-full z-[99999] select-none transition-all duration-300",
        scroll ? "bg-background/70 backdrop-blur-md border-b border-border/40 shadow-sm" : "bg-transparent"
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <Link href="/#home" className="text-xl font-bold font-heading">
              Tasmind AI
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.menu ? (
                      <>
                        <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul
                            className={cn(
                              "grid gap-2 p-4 md:w-[400px] lg:w-[500px] rounded-xl bg-background shadow-lg",
                              link.title === "Features"
                                ? "lg:grid-cols-[.75fr_1fr]"
                                : "lg:grid-cols-2"
                            )}
                          >
                            {link.title === "Features" && (
                              <li className="row-span-4 pr-2 relative rounded-lg overflow-hidden">
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/features"
                                    className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-b from-muted/40 to-muted p-4 no-underline outline-none hover:shadow-md transition-all"
                                  >
                                    <h6 className="mb-2 mt-4 text-lg font-medium">Explore Features</h6>
                                    <p className="text-sm text-muted-foreground">
                                      AI-driven automation, integrations, and seamless workflows.
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            )}
                            {link.menu.map((menuItem) => (
                              <ListItem
                                key={menuItem.title}
                                title={menuItem.title}
                                href={menuItem.href}
                                icon={menuItem.icon}
                              >
                                {menuItem.tagline}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right-Side Buttons */}
          <div className="hidden lg:flex items-center">
            {false ? (
              <Link href="/dashboard" className={buttonVariants({ size: "sm" })}>
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center gap-x-4">
                <Link
                  href="/auth/login"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>
                <Link
                  href="/auth/sign-up"
                  className={buttonVariants({ size: "sm", className: "bg-primary text-white flex items-center" })}
                >
                  Get Started
                  <ZapIcon className="size-4 ml-1.5 text-orange-500" />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Navbar */}
          <MobileNavbar />
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

/* List Item Component */
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <Icon className="h-5 w-5 text-primary" />
          <div>
            <h6 className="text-base font-medium text-foreground">{title}</h6>
            <p className="text-sm text-muted-foreground">{children}</p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
