import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills, problemSolving } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: skills.frontend,
  },
  {
    title: "Languages",
    icon: Server,
    skills: skills.backend,
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: skills.tools,
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/[0.03] dark:bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] dark:bg-primary/[0.03] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tighter">
            Skills & <span className="text-primary italic">Tech</span> 🛠️
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-2 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" 
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Problem Solving Card - High Impact */}
          <Card className="border-primary/20 dark:border-primary/10 bg-gradient-to-br from-card via-primary/[0.02] to-primary/[0.08] dark:from-card dark:to-primary/5 overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl">Problem Solving</h4>
                    <p className="text-xs uppercase tracking-tighter text-muted-foreground font-bold italic">Competitive Programming</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 rounded-2xl bg-background/80 border border-primary/10 backdrop-blur-sm group-hover:border-primary/40 transition-all flex flex-col items-center min-w-[120px]">
                    <span className="text-xs font-bold text-muted-foreground mb-1">Codeforces</span>
                    <span className="text-lg font-black text-primary">{problemSolving.codeforces}</span>
                  </div>
                  <div className="px-6 py-3 rounded-2xl bg-background/80 border border-primary/10 backdrop-blur-sm group-hover:border-primary/40 transition-all flex flex-col items-center min-w-[120px]">
                    <span className="text-xs font-bold text-muted-foreground mb-1">LeetCode</span>
                    <span className="text-lg font-black text-primary">{problemSolving.leetcode}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {skillCategories.map((category) => (
            <Card key={category.title} className="border-primary/20 dark:border-primary/10 bg-gradient-to-br from-card via-primary/[0.01] to-primary/[0.05] dark:from-card dark:to-primary/5 overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4 min-w-[200px]">
                    <div className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl">{category.title}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold italic">Technical Stack</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all duration-200 px-4 py-1.5 font-bold text-xs border border-primary/5 group-hover:border-primary/20 shadow-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
