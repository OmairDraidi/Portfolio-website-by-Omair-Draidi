import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Rocket, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Front-End Developer",
    "Computer Systems Engineer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: personalInfo.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: personalInfo.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ];

  const featuredSkills = ["React", "TypeScript", "Node.js", "Python", "TailwindCSS"];

  return (
    <section
      id="hero"
      className="min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 dark:from-primary/20 dark:via-transparent dark:to-primary/10" />

        {/* Animated blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50"
        />

        {/* Decorative Floating Tech Icons */}
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 right-20 hidden lg:block"
        >
          <Code2 size={100} className="text-primary" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/3 left-20 hidden lg:block"
        >
          <Cpu size={80} className="text-primary" />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
        {/* Profile with Glow Effect */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="mb-8 flex justify-center relative"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"
          />
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-primary via-primary/80 to-primary/40 flex items-center justify-center p-1 shadow-2xl relative z-10">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border-2 border-primary/20">
              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent italic">
                OD
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <Rocket size={16} className="text-primary animate-pulse" />
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
            Ready to Build the Future
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4"
        >
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 h-[40px] flex flex-col items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground/80 tracking-tight"
            >
              {roles[roleIndex]}
            </motion.h2>
          </AnimatePresence>
          <motion.div 
            layoutId="underline"
            className="h-1.5 w-20 bg-gradient-to-r from-primary to-transparent mt-2 rounded-full" 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          {personalInfo.tagline}
        </motion.p>

        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base font-bold transition-all hover:scale-105 hover:shadow-primary/25 hover:shadow-2xl active:scale-95 bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection("#projects")}
                data-testid="button-view-projects"
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base font-bold border-2 transition-all hover:bg-primary/5 hover:scale-105 active:scale-95"
                asChild
              >
                <a href={personalInfo.resume} target="_blank" rel="noreferrer">
                  Get My CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 border-l-0 sm:border-l sm:pl-6 border-muted-foreground/20">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.1, color: "var(--primary)" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="transition-transform duration-300 group-hover:rotate-12 inline-block">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Skills Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            {featuredSkills.map((skill) => (
              <span key={skill} className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40 hover:text-primary transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground/30 animate-pulse">
            Scroll
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            className="animate-bounce hover:bg-transparent group"
            aria-label="Scroll down"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-5 w-5 text-primary/50 group-hover:text-primary transition-colors" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
