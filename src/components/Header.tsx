import { SiGit, SiDiscord } from "react-icons/si";
import { CentralIcon } from "@central-icons-react/all";
import { centralIconProps } from "@/lib/icon-props";
import { cn } from "@/lib/utils";

function SaleFloatingIcons() {
  const items = [
    { left: "5%", delay: "0s", slow: true, iconSize: 12 },
    { left: "15%", delay: "0.7s", slow: false, iconSize: 10 },
    { left: "25%", delay: "1.4s", slow: true, iconSize: 12 },
    { left: "35%", delay: "0.3s", slow: false, iconSize: 10 },
    { left: "45%", delay: "1s", slow: true, iconSize: 12 },
    { left: "55%", delay: "1.8s", slow: false, iconSize: 10 },
    { left: "65%", delay: "0.5s", slow: true, iconSize: 12 },
    { left: "75%", delay: "1.2s", slow: false, iconSize: 10 },
    { left: "85%", delay: "2s", slow: true, iconSize: 12 },
    { left: "95%", delay: "0.8s", slow: false, iconSize: 10 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      {items.map((item, i) => (
        <div
          key={i}
          className={cn("absolute top-0 text-white/50", item.slow ? "animate-snowfall-slow" : "animate-snowfall")}
          style={{ left: item.left, animationDelay: item.delay, animationFillMode: "both" }}
        >
          <CentralIcon
            {...centralIconProps}
            name="IconBanknote2"
            size={item.iconSize}
            className="text-white/50"
            ariaHidden
          />
        </div>
      ))}
    </div>
  );
}

export function Header({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("flex h-14 shrink-0 items-center justify-end gap-4 bg-background px-4", className)} // ik this is such bullshit but i think it adds character
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="relative flex h-10 cursor-pointer items-center gap-2 overflow-hidden rounded-2xl px-3 py-2 text-white transition-all duration-200 hover:scale-[102%] hover:opacity-90 md:px-4 bg-gradient-to-br from-[#EA2264] via-[#d91e54] to-[#b8184a] dark:from-[#FF73A8] dark:via-[#e85a8a] dark:to-[#d64a78] dark:ring-2 dark:ring-white/10 dark:ring-inset">
          <SaleFloatingIcons />
          <span className="pointer-events-none relative z-10 flex items-center gap-1.5 truncate text-sm font-medium">
            <span className="bg-clip-text font-title text-transparent bg-gradient-to-br from-white to-[#ffcce0] dark:from-white dark:to-[#ffb3cc]">
              100% free!
            </span>
          </span>
        </div>
        <a
          href="https://git.pirateib.su/pirateIB/rdojo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="View on GitHub"
        >
          <SiGit size={20} className="size-5" aria-hidden />
        </a>
        <a
          href="https://discord.pirateib.sh/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Join our Discord"
        >
          <SiDiscord size={20} className="size-5" aria-hidden />
        </a>
      </div>
    </header>
  );
}
