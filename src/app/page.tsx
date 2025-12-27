
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { WavingHand } from "@/components/waving-hand";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import { ContactSection } from "@/components/contact-section";
import { CodingProfiles } from "@/components/coding-profiles";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 sm:space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-6 sm:space-y-8">
          <div className="gap-3 sm:gap-4 flex justify-between items-start">
            <div className="flex-col flex flex-1 space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-1">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none font-roblox"
                  yOffset={8}
                  animateByCharacter={true}
                  characterDelay={0.04}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} `}
                />
                <BlurFade delay={BLUR_FADE_DELAY + 0.5}>
                  <WavingHand />
                </BlurFade>
              </div>
              <BlurFadeText
                className="max-w-[600px] text-sm sm:text-base md:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-20 sm:size-24 md:size-28 border flex-shrink-0">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-6 w-full py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Featured Projects</h2>
              <a
                href="/projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                View all projects →
              </a>
            </div>
          </BlurFade>

          {/* Show only first 2 projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA.projects.slice(0, 2).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.1}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
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
        </div>
      </section>

      <section id="coding-profiles">
        <div className="space-y-4 w-full py-4">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <CodingProfiles />
          </BlurFade>
        </div>
      </section>

      <ContactSection
        delay={BLUR_FADE_DELAY * 16}
        twitterUrl={DATA.contact.social.X.url}
        email={DATA.contact.email}
      />
    </main>
  );
}
