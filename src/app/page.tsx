import AnimationContainer from "@/components/animation-container";
import { BentoCard, BentoGrid, CARDS } from "@/components/bento-grid";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/constants/misc";
import { ArrowRightIcon, Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden scrollbar-hide">
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background pb-24">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            {/* Enhanced AI Tagline with Gradient Motion */}
            <Button
              variant="ghost"
              className="group relative mb-8 h-11 rounded-full border border-primary/20 bg-background px-6 shadow-lg transition-all hover:scale-105 hover:border-primary/30"
            >
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute h-full w-full animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(199, 147, 255, 0.2)_0%,rgba(124,58,237,0.8)_50%,rgba(199,147,255,0.2)_100%)]" />
              </div>
              <span className="relative z-10 flex items-center gap-2 text-sm font-medium text-primary">
                <span className="animate-pulse">✨</span>
                Intelligent Automation Platform
                <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            {/* Dynamic Hero Heading */}
            <h1 className="text-foreground py-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] font-heading">
              Transform Workflows with
              <span className="mx-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Adaptive AI
              </span>
            </h1>

            {/* Value Proposition Subheading */}
            <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl max-w-3xl">
              TaskMind AI learns and adapts to your unique workflow patterns,
              offering:
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                Smart integrations • Context-aware automation • Real-time
                optimization
              </span>
            </p>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col gap-6 items-center z-50 w-full">
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  {/* <Link href="/auth/sign-in" className="flex items-center">
                    <span>Start Free Trial</span>
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link> */}
                  <div className="flex items-center">
                    <span>Start Free Trial</span>
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg border-foreground/20 hover:border-foreground/30"
                >
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No credit card required • GDPR compliant • SOC 2 certified
              </p>
            </div>
          </AnimationContainer>

          {/* Interactive Dashboard Preview */}
          <AnimationContainer
            delay={0.2}
            className="relative pt-20 w-full group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl opacity-30 animate-gradient-pan" />

            <div className="relative -m-2 rounded-2xl p-2 ring-1 ring-inset ring-foreground/10 bg-background/80 backdrop-blur-2xl shadow-2xl">
              <BorderBeam
                size={300}
                duration={15}
                delay={10}
                colorFrom="#8b5cf6"
                colorTo="#d946ef"
              />

              {/* Animated Platform Integrations */}
              <div className="absolute -top-6 inset-x-0 flex justify-center gap-4 z-50">
                {["slack", "salesforce", "gmail", "whatsapp"].map(
                  (platform) => (
                    <div
                      key={platform}
                      className="flex items-center justify-center p-2 bg-background rounded-full border border-foreground/10 shadow-sm hover:shadow-md transition-all"
                    >
                      <Image
                        src={`/integrations/${platform}.svg`}
                        alt={platform}
                        width={32}
                        height={32}
                        className="size-6 md:size-8 opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )
                )}
              </div>

              {/* Interactive Dashboard Preview */}
              <div className="relative overflow-hidden rounded-xl border border-foreground/5 bg-gradient-to-b from-background to-foreground/5">
                <Image
                  src="/dashboard-dark.svg"
                  alt="AI Automation Dashboard"
                  width={1920}
                  height={1080}
                  quality={100}
                  className="w-full h-auto scale-[1.01]"
                />

                {/* Hover-overlay with AI Features */}
                {/* <div className="absolute inset-0 bg-black flex items-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {["Auto-workflow", "Smart Analytics", "Live AI"].map(
                      (feature) => (
                        <div
                          key={feature}
                          className="p-4 bg-background/90 rounded-lg border border-foreground/10 backdrop-blur-sm"
                        >
                          <h3 className="text-sm font-semibold text-primary">
                            {feature}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {feature === "Auto-workflow"
                              ? "Context-aware task routing"
                              : feature === "Smart Analytics"
                              ? "Real-time performance insights"
                              : "Active AI optimization"}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div> */}

                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center w-full bg-black">
                    <span className="text-white text-4xl md:text-8xl font-bold bg-black/50 px-6 py-3 rounded-lg">
                      Coming Soon
                    </span>
                  </div>
              </div>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Companies Section */}
      <MaxWidthWrapper>
        <AnimationContainer delay={0.4}>
          <div className="py-14">
            <div className="mx-auto px-4 md:px-8">
              <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                Trusted by the best in the industry
              </h2>
              <div className="mt-8">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                  {COMPANIES.map((company) => (
                    <li key={company.name}>
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        quality={100}
                        className="w-28 h-auto"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Features Section */}
      <MaxWidthWrapper className="pt-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Features" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Automate Workflows with AI Precision
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-3xl">
              TaskMind AI revolutionizes business automation through intelligent
              process orchestration -
              <br className="hidden md:block" />
              seamlessly connecting apps, predicting tasks, and optimizing
              workflows in real-time.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <BentoGrid className="py-8">
            {CARDS.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
}
