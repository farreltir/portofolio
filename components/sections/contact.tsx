"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      console.log(values);
    }, 1000);
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute -z-10 bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or just want to chat? Feel free to reach out.
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInFromLeft}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex">
              <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-muted-foreground mb-1">
                  For general inquiries
                </p>
                <a className="text-primary hover:underline">
                  farreltir@gmail.com
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground mb-1">
                  Mon-Fri from 9am to 6pm
                </p>
                <a className="text-primary hover:underline">
                  +62 838 9216 8265
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-muted-foreground mb-1">
                  South Tangerang, Indonesia
                </p>
                <p className="text-primary">
                  Available for remote work worldwide
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-border">
              <h3 className="text-lg font-medium mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/farreltir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.839 21.569C9.339 21.663 9.5 21.363 9.5 21.101C9.5 20.865 9.492 20.143 9.489 19.309C6.73 19.859 6.139 17.859 6.139 17.859C5.684 16.711 5.025 16.413 5.025 16.413C4.121 15.773 5.098 15.786 5.098 15.786C6.101 15.858 6.639 16.832 6.639 16.832C7.535 18.312 8.972 17.908 9.525 17.656C9.617 17.003 9.876 16.599 10.161 16.368C7.98 16.134 5.692 15.276 5.692 11.474C5.692 10.376 6.094 9.475 6.659 8.77C6.556 8.521 6.199 7.53 6.759 6.149C6.759 6.149 7.601 5.883 9.477 7.178C10.276 6.957 11.135 6.847 11.99 6.842C12.845 6.847 13.705 6.957 14.505 7.178C16.379 5.883 17.22 6.149 17.22 6.149C17.78 7.53 17.424 8.521 17.321 8.77C17.888 9.475 18.287 10.376 18.287 11.474C18.287 15.286 15.995 16.13 13.807 16.359C14.161 16.64 14.5 17.203 14.5 18.059C14.5 19.274 14.488 20.771 14.488 21.101C14.488 21.365 14.645 21.669 15.155 21.567C19.137 20.164 22 16.417 22 12C22 6.477 17.523 2 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/farrelt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V20H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V20H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      fill="currentColor"
                    />
                    <path d="M6 9H2V20H6V9Z" fill="currentColor" />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/farreltirtawinata/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/27hbE2UA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Discord"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 245 240"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M104.4 104.5c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.3-5 10.2-11.1 0-6.1-4.5-11.1-10.2-11.1Zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.3-5 10.2-11.1 0-6.1-4.5-11.1-10.2-11.1Z" />
                    <path d="M189.5 20H55.2C42 20 31.1 30.9 31.1 44.1v151.8c0 13.2 10.9 24.1 24.1 24.1h110.7l-5.2-18.1 12.6 11.6 11.9 11 21.1 18.6V44.1c0-13.2-10.9-24.1-24.1-24.1ZM162.5 163s-4.6-5.5-8.4-10.3c16.6-4.7 22.9-15 22.9-15-5.2 3.4-10.2 5.8-14.6 7.4-6.4 2.7-12.5 4.4-18.5 5.4-12.2 2.3-23.4 1.7-32.8-0.1-7.2-1.4-13.4-3.4-18.5-5.4-2.9-1.1-6.1-2.5-9.3-4.2-0.4-0.2-0.8-0.4-1.2-0.6-0.3-0.2-0.5-0.3-0.7-0.4-3.2-1.8-5-3.1-5-3.1s6.1 10.1 22.2 14.9c-3.7 4.8-8.4 10.5-8.4 10.5-27.8-0.9-38.3-19.1-38.3-19.1 0-40.4 18.1-73.2 18.1-73.2 18.1-13.5 35.3-13.1 35.3-13.1l1.2 1.4c-22.6 6.5-33 16.3-33 16.3s2.8-1.5 7.5-3.6c13.6-6 24.3-7.6 28.7-8 0.7-0.1 1.3-0.2 2-0.2 7.2-1 15.3-1.3 23.8-0.2 11.2 1.3 23.2 4.6 35.4 11.3 0 0-9.9-9.4-31.2-15.9l1.7-2s17.2-0.4 35.3 13.1c0 0 18.1 32.8 18.1 73.2 0.1 0-10.5 18.2-38.3 19.1Z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInFromRight}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Joko Sebastian" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="joko@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or inquiry..."
                              className="min-h-32 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
