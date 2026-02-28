"use client";

import { cn } from "@/lib/utils";
import { Code2, Layout, Server, Database, Terminal } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  terminal: Terminal,
};

const neutralStyle = {
  border: "border-neutral-200 dark:border-neutral-700/60",
  iconBg: "bg-neutral-100 dark:bg-neutral-800",
  icon: "text-neutral-600 dark:text-neutral-400",
  badge:
    "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100 dark:bg-neutral-800/60 dark:text-neutral-300 dark:border-neutral-700/50 dark:hover:bg-neutral-700/40",
};

interface SkillCategory {
  readonly category: string;
  readonly icon: string;
  readonly skills: readonly string[];
}

export function SkillsSection({
  categories,
}: {
  categories: readonly SkillCategory[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categories.map((cat, idx) => {
        const Icon = iconMap[cat.icon] || Code2;
        const accent = neutralStyle;
        // Make the last item span full width if odd number of categories
        const isLast = idx === categories.length - 1;
        const isOdd = categories.length % 2 !== 0;

        return (
          <div
            key={cat.category}
            className={cn(
              "group relative rounded-2xl border p-6",
              "bg-white dark:bg-white/[0.04]",
              "transition-all duration-300 ease-out",
              "hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black/20",
              "hover:-translate-y-0.5",
              accent.border,
              isLast && isOdd && "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)]"
            )}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className={cn(
                  "flex items-center justify-center size-9 rounded-xl",
                  "transition-transform duration-300 group-hover:scale-110",
                  accent.iconBg,
                  accent.icon
                )}
              >
                <Icon className="size-[18px]" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-foreground tracking-tight">
                {cat.category}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={cn(
                    "inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-semibold",
                    "transition-all duration-200 ease-out cursor-default",
                    "hover:scale-105",
                    accent.badge
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
