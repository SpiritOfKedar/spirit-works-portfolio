import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export const metadata = {
    title: "Projects",
    description: "Explore my portfolio of projects showcasing systems programming, web development, and AI applications.",
};

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-8 sm:space-y-10">
            {/* Header Section */}
            <section className="mx-auto w-full max-w-2xl space-y-4">
                <BlurFade delay={BLUR_FADE_DELAY}>
                    <Link
                        href="/"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to home
                    </Link>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        Projects
                    </h1>
                </BlurFade>

                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <p className="text-muted-foreground">
                        A collection of systems programming, full-stack applications, and AI-powered tools I&apos;ve built.
                    </p>
                </BlurFade>
            </section>

            {/* Projects Grid */}
            <section className="mx-auto w-full max-w-2xl">
                <div className="flex flex-col gap-6">
                    {DATA.projects.map((project, idx) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 4 + idx * 0.1}
                        >
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
        </main>
    );
}
