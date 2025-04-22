"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import Image from "next/image";

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (scrollRef.current) {
      const nextSection = scrollRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Custom cursor trail effect
  useEffect(() => {
    let particles: HTMLDivElement[] = [];
    const colors = ["#ffd700", "#ff5500", "#00aaff"];

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("div");
      particle.className =
        "fixed pointer-events-none z-10 rounded-full mix-blend-difference";
      particle.style.width = "8px";
      particle.style.height = "8px";
      particle.style.left = x + "px";
      particle.style.top = y + "px";
      particle.style.position = "fixed";
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = "0.8";
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = "all 0.8s ease-out";
        particle.style.opacity = "0";
        particle.style.transform = `translate(${
          (Math.random() - 0.5) * 40
        }px, ${(Math.random() - 0.5) * 40}px) scale(0)`;
      }, 10);

      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 800);

      particles.push(particle);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.92) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      particles.forEach((particle) => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <section
      ref={scrollRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 pointer-events-none" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col space-y-8"
          >
            <div>
              <motion.span
                variants={fadeIn}
                className="inline-block px-3 py-1 mb-6 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {SITE_CONFIG.title}
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-4"
              >
                Crafting Digital{" "}
                <span className="text-primary">Experiences</span> That Matter
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground max-w-xl"
              >
                {SITE_CONFIG.description} I combine aesthetic beauty with
                functional precision to build memorable digital products.
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Button
                size="lg"
                className="group"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About Me
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-2 text-muted-foreground text-sm flex items-center"
            ></motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-lg overflow-hidden aspect-square ml-40">
              <Image
                src="images/hero.jpeg"
                alt="Hero"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={scrollToNextSection}
        >
          <span className="text-sm text-muted-foreground mb-2">
            Scroll Down
          </span>
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
