import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden h-full rounded-xl",
        // Glassmorphism effect
        "bg-white/[0.03] dark:bg-white/[0.03]",
        "backdrop-blur-xl backdrop-saturate-150",
        // Transitions
        "transition-all duration-300 ease-out",
        // Hover effects
        "hover:bg-white/[0.08] dark:hover:bg-white/[0.08]",
        "hover:shadow-xl hover:shadow-black/10",
        "hover:-translate-y-0.5"
      )}
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <div className="relative overflow-hidden rounded-t-xl">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-44 w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        )}
        {image && (
          <div className="relative overflow-hidden rounded-t-xl">
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-44 w-full overflow-hidden object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        )}
      </Link>

      <CardHeader className="px-4 pt-4 pb-2">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base font-semibold tracking-tight text-foreground">
              {title}
            </CardTitle>
            {/* Active indicator */}
            <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active
            </span>
          </div>
          <time className="font-sans text-xs text-muted-foreground/70">
            {dates}
          </time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert leading-relaxed">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-4 pt-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className={cn(
                  "px-2 py-0.5 text-[10px] font-medium rounded-md",
                  "bg-white/[0.08] dark:bg-white/[0.08]",
                  "backdrop-blur-sm",
                  "text-foreground/70",
                  "hover:bg-white/[0.15] dark:hover:bg-white/[0.15]",
                  "hover:text-foreground",
                  "transition-all duration-200",
                  "border-0"
                )}
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-3">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  className={cn(
                    "flex gap-2 px-3 py-1.5 text-[11px] font-medium rounded-md",
                    "bg-white/[0.12] dark:bg-white/[0.12]",
                    "backdrop-blur-sm",
                    "text-foreground",
                    "hover:bg-white/[0.2] dark:hover:bg-white/[0.2]",
                    "hover:shadow-lg",
                    "transition-all duration-200",
                    "border-0"
                  )}
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </div>
  );
}
