"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

const EarlyButton = ({ text }: { text: string }) => {
  return (
    <>
      <Button
        size="lg"
        onClick={() => {
          document.getElementById("waitlist")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {text}
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </Button>
    </>
  );
};

export default EarlyButton;
