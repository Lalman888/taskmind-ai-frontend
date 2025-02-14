import Link from "next/link";
import { Icons } from "../icons";
// import { TextHoverEffect } from "../text-hover-effect";
import AnimationContainer from "../animation-container";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-start justify-start md:max-w-[250px]">
            <div className="flex items-start">
              <Icons.logo className="w-7 h-7" />
            </div>
            <p className="text-muted-foreground mt-4 text-sm text-start">
              TaskMind AI – Next-gen intelligent automation platform launching soon.
              Join waitlist for early access and exclusive benefits.
            </p>
          </div>
        </AnimationContainer>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <AnimationContainer delay={0.2}>
              <div>
                <h3 className="text-base font-medium text-white">Platform</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  {/* <li className="mt-2">
                    <Link
                      href="/features"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Features
                    </Link>
                  </li> */}
                  {/* <li className="mt-2">
                    <Link
                      href="/pricing"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Pricing
                    </Link>
                  </li> */}
                  <li className="mt-2">
                    <Link
                      href="#"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Use Cases
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="#waitlist"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Early Access
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimationContainer>

            <AnimationContainer delay={0.3}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-white">
                  Integrations
                </h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  {/* <li className="mt-2">
                    <Link
                      href="#waitlist"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Coming Soon
                    </Link>
                  </li> */}
                  {/* Commented out specific integrations for launch */}
                  <li className="mt-2">
                    <Link href="#">WhatsApp</Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#">LinkedIn</Link>
                  </li>
                  {/* <li className="mt-2">
                    <Link href="/integrations/gmail">Gmail</Link>
                  </li> */}
                  <li className="mt-2">
                    <Link href="#">Telegram</Link>
                  </li>
                 
                </ul>
              </div>
            </AnimationContainer>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8">
            <AnimationContainer delay={0.4}>
              <div>
                <h3 className="text-base font-medium text-white">Resources</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="mt-2">
                    <Link href="#">Blog</Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="mailto:support@taskmind.ai"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Contact Support
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#">Documentation</Link>
                  </li>
                </ul>
              </div>
            </AnimationContainer>

            <AnimationContainer delay={0.5}>
              <div className="mt-10 md:mt-0 flex flex-col">
                <h3 className="text-base font-medium text-white">Company</h3>
                <ul className="mt-4 text-sm text-muted-foreground">
                  <li className="mt-2">
                    <Link
                      href="#"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      About
                    </Link>
                  </li>
                  {/* <li className="mt-2">
                    <Link href="/careers">Careers</Link>
                  </li> */}
                  <li className="mt-2">
                    <Link
                      href="#"
                      className="hover:text-foreground transition-all duration-300"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link href="#">Terms</Link>
                  </li>
                </ul>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <AnimationContainer delay={0.6}>
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} TaskMind AI. All rights reserved.
          </p>
        </AnimationContainer>
      </div>

      {/* Temporary removal of decorative element
      <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
        <TextHoverEffect text="TaskMind AI" />
      </div>
      */}
    </footer>
  );
};

export default Footer;