"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work across product design and development.
            Each project represents a unique challenge solved with creativity
            and technical expertise.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card
                className={`overflow-hidden transition-all duration-300 h-full ${
                  hoveredProject === project.id ? "shadow-lg scale-[1.02]" : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <CardContent className="relative p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className={`absolute bottom-6 right-6 p-2 rounded-full bg-primary/10 text-primary transition-all duration-300 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                    aria-label={`View ${project.title} project`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
