"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants/nav-links";
import { cn } from "@/lib/utils";
import { LucideIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex lg:hidden items-center">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-screen bg-background">
          <SheetClose
            asChild
            className="absolute top-3 right-5 z-20 flex items-center justify-center"
          >
            <Button size="icon" variant="ghost" className="text-neutral-500">
              <X className="w-6 h-6" />
            </Button>
          </SheetClose>

          <div className="flex flex-col items-start w-full py-4 mt-8">
            <div className="flex flex-col w-full space-y-3 px-4">
              {false ? (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full text-center",
                  })}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className={buttonVariants({
                      variant: "outline",
                      className: "w-full text-center",
                    })}
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className={buttonVariants({
                      className: "w-full text-center bg-primary text-white",
                    })}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Navigation Menu */}
            <ul className="flex flex-col w-full mt-6 px-4">
              <Accordion type="single" collapsible className="w-full">
                {NAV_LINKS.map((link) => (
                  <AccordionItem key={link.title} value={link.title} className="border-b">
                    {link.menu ? (
                      <>
                        <AccordionTrigger className="py-3 text-lg font-medium">
                          {link.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul onClick={handleClose} className="w-full space-y-2">
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
                        </AccordionContent>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={handleClose}
                        className="flex items-center w-full py-3 text-lg font-medium text-muted-foreground hover:text-white transition-colors"
                      >
                        {link.title}
                      </Link>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href!}
        ref={ref}
        className={cn(
          "flex items-center space-x-3 rounded-lg px-4 py-2 text-white hover:bg-primary transition-colors",
          className
        )}
        {...props}
      >
        <Icon className="h-5 w-5" />
        <div>
          <h6 className="text-base font-medium">{title}</h6>
          <p className="text-sm text-muted-foreground">{children}</p>
        </div>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MobileNavbar;
