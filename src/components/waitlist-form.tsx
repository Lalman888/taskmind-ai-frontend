"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Submitted email:", email);
      setSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative group w-full max-w-xl mx-auto">
      {/* <BorderBeam
        size={250}
        duration={12}
        delay={9}
        colorFrom="#8b5cf6"
        colorTo="#d946ef"
      /> */}

      <div className="relative z-10 bg-background/80 backdrop-blur-lg rounded-xl border border-primary/20 p-8 shadow-2xl">
        {!submitted ? (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Join the Automation Revolution
              </h3>
              <p className="text-muted-foreground">
                Be first in line for early access and exclusive launch perks
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-full px-6 border-primary/20 focus-visible:ring-primary/40"
                required
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="h-12 rounded-full px-8 gap-2 transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <span>Processing...</span>
                    <svg
                      className="animate-spin h-5 w-5 text-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </div>
                ) : (
                  <>
                    Get Early Access
                    <ArrowRightIcon className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              By joining, you agree to our{" "}
              <a href="#" className="underline hover:text-primary">
                Privacy Policy
              </a>
            </p>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              🎉 You're on the list!
            </h3>
            <p className="text-muted-foreground">
              We'll send you early access details soon
            </p>
          </div>
        )}
      </div>
    </div>
  );
}