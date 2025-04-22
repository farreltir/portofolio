"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 relative">
      {/* Design elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInFromLeft}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About me"
                width={1260}
                height={750}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-lg" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInFromRight}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Passionate about creating impactful digital solutions
            </h2>

            <Tabs defaultValue="story" className="mt-8">
              <TabsList className="mb-6">
                <TabsTrigger value="story">My Story</TabsTrigger>
                <TabsTrigger value="experience">Work Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent
                value="story"
                className="space-y-4 text-muted-foreground"
              >
                <p>
                  Hello! My name is Eduardus Farrel Tirtawinata, an enthusiastic
                  undergraduate Informatics student at Multimedia Nusantara
                  University, driven by a passion for continuous learning and
                  technological innovation.
                </p>
                <p>
                  As an Informatics student with diverse hands-on experience in
                  retail, event management, marketing, and customer service, I
                  am passionate about integrating technology to enhance customer
                  experiences and business operations. My roles at Sinarmas
                  Land, Maxx Coffee, PT Fortune, Flash Coffee, SIP Kopi Outlet,
                  and Watsons have provided me with a strong foundation in event
                  coordination, brand marketing, hospitality, and customer
                  relationship management.
                </p>
                <p>
                  Throughout my journey, I have successfully enhanced customer
                  satisfaction, organized impactful events, and contributed to
                  team efficiency through proactive problem-solving and
                  strategic planning. My goal is to leverage my background in
                  informatics and real-world experience to drive positive
                  outcomes in the tech, event, and customer service industries.
                </p>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <span className="text-sm text-primary font-medium">
                      Feb 2025 - Present
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">
                    Internship - Developer
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    PT Bumi Serpong Damai Tbk
                  </p>
                  <p className="text-muted-foreground">
                    Developing, upgrading, and maintaining company websites to
                    enhance functionality and user experience.
                  </p>
                </div>

                <div className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <span className="text-sm text-primary font-medium">
                      Nov 2024 - Present
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">Part time - Barista</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    PT MAXX COFFEE PRIMA
                  </p>
                  <p className="text-muted-foreground">
                    Preparing and serving a wide range of coffee beverages and
                    food items, ensuring they met the company&apos;s
                    high-quality standards.
                  </p>
                </div>

                <div className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <span className="text-sm text-primary font-medium">
                      Jan 2025 - Feb 2025
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">
                    Internship - Accountant
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    PT Fortune Multi Lestari Raya
                  </p>
                  <p className="text-muted-foreground">
                    Assisted in tax document preparation, data entry, and
                    financial record-keeping to support the tax consulting team.
                  </p>
                </div>

                <div className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <span className="text-sm text-primary font-medium">
                      Aug 2023 - Oct 2024
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">Part time - Barista</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Flash Coffee
                  </p>
                  <p className="text-muted-foreground">
                    Delivering high-quality beverages and creating a welcoming
                    experience for every customer.
                  </p>
                </div>

                <div className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <span className="text-sm text-primary font-medium">
                      Jan 2023 - Jul 2023
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">Part time - Barista</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    SIP Kopi Outlet
                  </p>
                  <p className="text-muted-foreground">
                    Preparing and serving a variety of beverages and snacks
                    while adhering to the company&apos;s operational standards.
                  </p>
                </div>

                <div className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <span className="text-sm text-primary font-medium">
                      May 2022 - Aug 2022
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">Part time - Staff</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Watsons Indonesia
                  </p>
                  <p className="text-muted-foreground">
                    Assisted customers in finding products suited to their needs
                    and provided thoughtful recommendations to enhance their
                    shopping experience.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <span className="text-sm text-primary font-medium">
                      Aug 2022 - Present
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">
                    Bachelor of Informatics
                  </h3>
                  <div className="text-muted-foreground space-y-4">
                    <p className="mb-1">Multimedia Nusantara University</p>
                    <p>
                      I enrolled in the Informatics program with the motivation
                      that commercial jobs would be replaced by technology in
                      the future, so I decided to pursue this field of study.
                    </p>
                    <p>
                      As an Informatics student at Universitas Multimedia
                      Nusantara, I have engaged deeply with courses focused on
                      technology and digital innovation, which have developed my
                      skills in programming, problem-solving, and analytical
                      thinking.
                    </p>
                    <p>
                      My education has been enriched by participation in
                      team-based projects, tech workshops, and seminars,
                      allowing me to apply theoretical knowledge in practical
                      contexts. ✨
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
