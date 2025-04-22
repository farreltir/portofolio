"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SKILLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="absolute -z-10 top-1/3 left-1/3 right-1/3 bottom-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive set of skills and technologies I&apos;ve mastered
            over the years, allowing me to deliver exceptional digital products
            from concept to implementation.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeInUp}
              className={cn(
                "flex flex-col p-6 rounded-lg",
                "bg-background/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors",
                "hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]"
              )}
            >
              <div className="mb-6 flex items-center">
                <div
                  className={`w-10 h-10 rounded-md flex items-center justify-center bg-primary/10 mr-3`}
                >
                  <span className="text-xl font-bold text-primary">
                    {groupIndex + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>

              <ul className="space-y-3 flex-1">
                {skillGroup.items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{ width: "70%" }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary">Expert</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
