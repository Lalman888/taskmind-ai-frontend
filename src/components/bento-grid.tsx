import { buttonVariants } from "@/components/ui/button";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, BrainCircuit, Bot, PlugZap, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { Input } from "./ui/input";
import { Integrations } from "./integrations";
import { Label } from "./ui/label";

export const CARDS = [
    {
        Icon: BrainCircuit,
        name: "AI Workflow Builder",
        description: "Create intelligent workflows with natural language commands.",
        href: "#",
        cta: "Start Building",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border/50 border-r-0">
                <CardHeader>
                    <CardTitle className="text-primary">
                        Describe Your Workflow
                    </CardTitle>
                    <CardDescription>
                        {`"Automate customer follow-ups across email and Slack"`}
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <Label className="text-muted-foreground">
                        AI Suggestion
                    </Label>
                    <div className="p-2 rounded-md bg-muted/50 border border-border">
                        <span className="text-sm">✅ Will create: Email parser + CRM update + Slack notification</span>
                    </div>
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: Bot,
        name: "Smart Automation Hub",
        description: "Monitor and manage all active AI automations in real-time.",
        href: "#",
        cta: "View Analytics",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border border-border/50 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-4 bg-background rounded-lg">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Active Automations</span>
                    <span className="text-primary">23 running</span>
                </div>
                <div className="mt-4 space-y-2">
                    {['Lead Processing', 'Support Tickets', 'Data Sync', 'Meeting Prep'].map((task) => (
                        <div key={task} className="p-2 rounded-md bg-muted/20 border border-border/50 flex items-center justify-between hover:bg-muted/40">
                            <span>{task}</span>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs text-muted-foreground">AI Active</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        Icon: PlugZap,
        name: "Universal Integrations",
        description: "Connect to 100+ business apps with intelligent auto-mapping.",
        href: "#",
        cta: "Explore Connections",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Integrations className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: CalendarCheck,
        name: "AI Calendar Assistant",
        description: "Automated scheduling with context-aware prioritization.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Optimize Schedule",
        background: (
            <div className="absolute right-0 top-10 origin-top rounded-md border border-border/50 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105 p-4 bg-background">
                <div className="flex flex-col gap-2">
                    <div className="text-sm text-primary">Next Meeting</div>
                    <div className="text-lg font-medium">Client Strategy Review</div>
                    <div className="text-sm text-muted-foreground">
                        <span className="block">AI Prepared: </span>
                        <span className="text-primary">✓ Briefing doc</span>
                        <span className="block">✓ Historical data</span>
                    </div>
                </div>
            </div>
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[24rem] grid-cols-3 gap-4",
                "bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/40 overflow-hidden rounded-xl",
            "bg-background/80 backdrop-blur-sm [box-shadow:0_-20px_80px_-20px_#8b5cf620_inset]",
            "transition-all hover:border-primary/30 hover:shadow-xl",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left text-primary/80 transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
                {name}
            </h3>
            <p className="max-w-lg text-muted-foreground">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link 
                href={href} 
                className={buttonVariants({ 
                    size: "sm", 
                    className: "cursor-pointer bg-primary/10 hover:bg-primary/20 text-primary",
                    variant: "ghost"
                })}
            >
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-gradient-to-b from-primary/5 via-transparent" />
    </div>
);

export { BentoCard, BentoGrid };