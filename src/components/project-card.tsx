"use client";

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
import { ArrowUpRight } from "lucide-react";

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
        "group relative flex flex-col overflow-hidden h-full rounded-2xl",
        // Theme-aware background
        "bg-card dark:bg-white/[0.04]",
        // Border
        "border border-border/50 dark:border-white/10",
        // Transitions
        "transition-all duration-500 ease-out",
        // Hover effects
        "hover:border-border dark:hover:border-white/20",
        "hover:bg-accent/50 dark:hover:bg-white/[0.08]",
        "hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-primary/5",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

      <Link
        href={href || "#"}
        className="block cursor-pointer"
      >
        {video && (
          <div className="relative overflow-hidden">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        )}
        {image && (
          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={800}
              height={450}
              className="h-64 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        )}
      </Link>

      <CardHeader className="px-5 pt-5 pb-3 relative z-10">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <CardTitle className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary/90 transition-colors duration-300">
                {title}
              </CardTitle>
              <time className="font-sans text-xs text-muted-foreground/60 mt-1 block">
                {dates}
              </time>
            </div>
            {/* Arrow indicator */}
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            </div>
          </div>

          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>

          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground/80 dark:prose-invert leading-relaxed line-clamp-3">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-5 pt-2">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge
                className={cn(
                  "px-2.5 py-1 text-[11px] font-medium rounded-full",
                  "bg-muted dark:bg-white/[0.06]",
                  "text-muted-foreground",
                  "hover:bg-accent dark:hover:bg-white/[0.12]",
                  "hover:text-foreground",
                  "transition-all duration-300",
                  "border border-border/50 dark:border-white/5 hover:border-border dark:hover:border-white/10",
                  "group-hover:translate-y-0"
                )}
                style={{
                  transitionDelay: `${index * 30}ms`
                }}
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank" onClick={(e) => e.stopPropagation()}>
                <Badge
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full",
                    "bg-muted dark:bg-white/[0.08]",
                    "text-foreground",
                    "hover:bg-accent dark:hover:bg-white/[0.15]",
                    "hover:scale-105",
                    "active:scale-95",
                    "transition-all duration-300",
                    "border border-border/50 dark:border-white/10 hover:border-border dark:hover:border-white/20",
                    "shadow-sm hover:shadow-md"
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
