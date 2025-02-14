"use client";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Join = () => {
  return (
    <>
      <Button
        size="lg"
        className="rounded-full px-8 py-6 text-lg gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
        onClick={() => {
          document.getElementById("waitlist")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Join Waitlist
        <ArrowRightIcon className="w-5 h-5 ml-2" />
      </Button>
    </>
  );
};

export default Join;
