import { Card } from "@/components/ui/card";
import { aboutSummary } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Visual Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-primary/[0.03] dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/[0.03] dark:bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tighter">
            About <span className="text-primary italic">Me</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-2 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" 
          />
        </motion.div>

        <div className="flex flex-col gap-16">
          {/* Journey Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-card/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-primary/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-xl">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  My Journey
                </h3>
                <div className="text-muted-foreground space-y-6 leading-relaxed text-lg font-medium">
                  {aboutSummary.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="relative pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 shadow-sm p-4 text-center group hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                <p className="text-2xl font-black text-primary mb-1">CSE</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Degree</p>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 shadow-sm p-4 text-center group hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                <p className="text-2xl font-black text-primary mb-1">React</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Expertise</p>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 shadow-sm p-4 text-center group hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                <p className="text-2xl font-black text-primary mb-1">Tulkarm</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Location</p>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 shadow-sm p-4 text-center group hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                <p className="text-2xl font-black text-primary mb-1">2026</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Graduate</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
