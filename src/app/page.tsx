import AnimationContainer from "@/components/animation-container";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="overflow-x-hidden scrollbar-hide size-full">
        {/* Hero Section */}
        <MaxWidthWrapper>
          <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
            <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
              
              {/* AI Tagline */}
              <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-all duration-200">
                <span>
                  <span className="absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className="absolute inset-[1px] rounded-full bg-neutral-950 transition-all duration-200 group-hover:bg-neutral-900" />
                <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                  🚀 Automate Tasks & Boost Productivity
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </span>
              </button>

              {/* Hero Heading */}
              <h1 className="text-foreground text-center py-6 text-5xl font-bold tracking-normal sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                AI-Powered Automation for{" "}
                <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
                  Smarter Workflows
                </span>
              </h1>

              {/* Subheading */}
              <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl">
                Taskmind AI streamlines your workflow with intelligent automation.
                <br className="hidden md:block" />
                <span className="hidden md:block">
                  Automate tasks, manage projects, and enhance efficiency with AI.
                </span>
              </p>

              {/* Call to Action */}
              <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                <Button asChild>
                  <Link
                    href="/auth/sign-in"
                    className="flex items-center"
                  >
                    Get Started for Free
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimationContainer>

            {/* Animated Dashboard Section */}
            <AnimationContainer
              delay={0.2}
              className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
            >
              <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
              <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                <BorderBeam size={250} duration={12} delay={9} />

                {/* Blurred Dashboard with "Coming Soon" */}
                <div className="relative w-full">
                  <Image
                    src="/dashboard-dark.svg"
                    alt="Dashboard"
                    width={1200}
                    height={1200}
                    quality={100}
                    className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border blur-none"
                  />
                  
                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center w-full bg-black">
                    <span className="text-white text-4xl md:text-8xl font-bold bg-black/50 px-6 py-3 rounded-lg">
                      Coming Soon
                    </span>
                  </div>
                </div>

                {/* Background Gradients */}
                <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
              </div>
            </AnimationContainer>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
