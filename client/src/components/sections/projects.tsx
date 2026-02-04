import { ExternalLink, Github, Terminal, Layers, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/portfolio-data";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            Featured <span className="text-primary italic">Projects</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-2 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mb-6" 
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Building robust solutions from architectural design to interactive frontend experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-primary/20 dark:border-primary/10 bg-card dark:bg-card/50 backdrop-blur-sm group overflow-hidden relative" data-testid={`card-project-${project.id}`}>
                {/* Adaptive Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary/20 dark:from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      {index % 2 === 0 ? <Terminal size={24} /> : <Layers size={24} />}
                    </div>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-primary/20" />
                       <div className="w-2 h-2 rounded-full bg-primary/40" />
                       <div className="w-2 h-2 rounded-full bg-primary/60" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-black tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 pt-0 relative z-10">
                  <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-black bg-muted/50 text-foreground/70 border-none px-3 py-1 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                        data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-6 pb-8 gap-4 flex-wrap relative z-10">
                  <Button
                    variant="outline"
                    className="rounded-xl border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold group/btn px-6 h-11"
                    asChild
                    data-testid={`link-github-${project.id}`}
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Source Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      variant="default"
                      className="rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 font-bold group/btn px-6 h-11 bg-primary"
                      asChild
                      data-testid={`link-demo-${project.id}`}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
                
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
