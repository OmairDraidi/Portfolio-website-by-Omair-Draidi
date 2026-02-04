import { Briefcase, GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { experience, education } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-muted/20"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            Experience & <span className="text-primary italic">Education</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-2 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full mb-6" 
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            My academic foundation and professional training that shaped my engineering career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Courses & Training Section */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Courses & Training</h3>
            </motion.div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <Card className="border-primary/5 bg-background shadow-lg hover:border-primary/30 transition-all duration-300 ml-4 group-hover:shadow-primary/5">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h4 className="text-xl font-black group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <Badge variant="outline" className="w-fit bg-primary/5 border-none font-bold text-[10px] uppercase tracking-widest text-primary flex items-center gap-1">
                            <Calendar size={12} />
                            {item.startDate} - {item.endDate}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground font-bold text-sm">
                          <div className="flex items-center gap-1 text-foreground/80">
                            <Award size={14} className="text-primary" />
                            {item.organization}
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground/60 italic">
                            <MapPin size={14} />
                            {item.location}
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="border-primary/5 bg-background/50 shadow-xl hover:border-primary/20 transition-all duration-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-primary/10 transition-colors" />
                    
                    <CardContent className="p-6 sm:p-8 relative z-10">
                      <div className="flex flex-col gap-5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <h4 className="text-xl sm:text-2xl font-black group-hover:text-primary transition-colors leading-tight">
                            {item.title}
                          </h4>
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 italic">
                            {item.startDate} - {item.endDate}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 font-bold text-foreground/90">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item.organization}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground font-medium text-sm">
                            <MapPin size={14} className="text-primary/50" />
                            {item.location}
                          </div>
                        </div>

                        <div className="bg-muted/30 p-4 rounded-2xl border border-primary/5">
                          <p className="text-muted-foreground text-sm leading-relaxed font-medium italic">
                            "{item.description}"
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
