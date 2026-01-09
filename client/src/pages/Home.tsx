import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  ArrowRight, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Bot, 
  Mic,
  Cpu
} from "lucide-react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// --- Data Constants ---

const skills = [
  {
    category: "Backend & APIs",
    icon: <Database className="w-6 h-6" />,
    items: ["Python", "FastAPI", "REST APIs", "PostgreSQL"]
  },
  {
    category: "GenAI & AI Systems",
    icon: <Bot className="w-6 h-6" />,
    items: ["RAG", "LangChain", "LangGraph", "CrewAI", "Prompt Engineering"]
  },
  {
    category: "Model Training & Ops",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Unsloth", "LoRA / QLoRA", "Hugging Face", "LLMOps", "MLflow"]
  },
  {
    category: "Voice & Multimodal AI",
    icon: <Mic className="w-6 h-6" />,
    items: ["Azure OpenAI", "Realtime Voice APIs", "TTS / STT", "OCR-based RAG"]
  },
  {
    category: "Frontend & Tools",
    icon: <Code2 className="w-6 h-6" />,
    items: ["React", "Next.js", "Tailwind CSS", "Git", "Vector DBs"]
  }
];

const projects = [
  {
    title: "Real-Time Personal Voice Assistant",
    description: "A real-time voice-to-voice AI assistant that answers questions about professional experience and projects using Azure OpenAI Realtime APIs.",
    tech: ["FastAPI", "Azure OpenAI Realtime API"]
  },
  {
    title: "Agentic RAG Platform with Intelligent Routing",
    description: "An advanced RAG system with memory and intelligent routing across LLM responses, web search, PDF RAG, and OCR-based RAG.",
    tech: ["FastAPI", "LangGraph", "LangChain", "OCR", "Tavily"]
  },
  {
    title: "AI Coding & Website Generation Platform",
    description: "A prompt-based coding agent that generates executable code and complete Next.js websites with live previews.",
    tech: ["FastAPI", "Next.js", "Azure OpenAI", "E2B Sandbox"]
  },
  {
    title: "LLM & VLM Fine-tuning Pipelines",
    description: "Fine-tuned multiple LLMs and VLMs using Unsloth with LoRA/QLoRA and published models to Hugging Face.",
    tech: ["Unsloth", "Hugging Face", "LoRA", "QLoRA"]
  },
  {
    title: "Automated PPT Voice Narration System",
    description: "A system that generates slide-by-slide voice narration from PowerPoint files.",
    tech: ["FastAPI", "Azure OpenAI", "TTS"]
  }
];

// --- Animations ---

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const submitContact = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(data: InsertContactMessage) {
    submitContact.mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background blobs for subtle depth */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/80 rounded-full blur-3xl -z-10 opacity-60" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p variants={fadeInUp} className="text-muted-foreground font-medium mb-4 tracking-wide text-sm uppercase">
              Portfolio
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[1.1]">
              Priyanka Shilwant
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-foreground/80 font-medium mb-8 max-w-2xl leading-relaxed">
              GenAI Engineer | FastAPI | Agentic RAG | Voice AI
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              "GenAI Engineer focused on building backend AI systems, agentic RAG pipelines, and real-time voice applications."
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <ScrollLink to="projects" smooth={true} duration={600} offset={-50}>
                <Button size="lg" className="rounded-full text-base px-8 h-12 shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={600}>
                <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-12 border-2 hover:bg-secondary transition-all">
                  Contact Me
                </Button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="section-padding bg-background relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">About Me</h2>
            </div>
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                "I’m a GenAI Engineer Intern at GenAIKit Software Solution Private Limited. I work mainly on backend AI systems using FastAPI, focusing on retrieval-augmented generation, agent-based workflows, and voice-enabled AI applications. I enjoy building practical AI systems that are reliable, scalable, and easy to integrate."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Technical Skills</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A comprehensive toolkit for building modern AI applications.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Experience</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative border-l-2 border-border pl-8 md:pl-12 py-4 space-y-12"
          >
            <div className="relative">
              <span className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold">GenAI Engineer Intern</h3>
                <div className="text-muted-foreground flex items-center gap-2 mt-1">
                  <span className="font-medium text-foreground">GenAIKit Software Solution Private Limited</span>
                  <span>•</span>
                  <span>Remote</span>
                  <span>•</span>
                  <span>Apr 2025 – Present</span>
                </div>
              </div>
              
              <ul className="space-y-3 text-muted-foreground text-lg list-disc pl-5">
                <li>Built GenAI APIs using FastAPI for RAG pipelines, agent workflows, and multimodal features</li>
                <li>Worked on agentic RAG systems with routing across LLM responses, web search, PDF RAG, and OCR-based RAG</li>
                <li>Built coding agents and website generators using Azure OpenAI and E2B sandbox</li>
                <li>Fine-tuned LLMs and VLMs using Unsloth and Hugging Face with LoRA/QLoRA</li>
                <li>Built real-time voice AI systems and AI-powered automation tools</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A selection of my recent work in Generative AI and backend engineering.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:priyankashilwant321@gmail.com" 
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">priyankashilwant321@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+917887509502" 
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">+91 78875 09502</span>
                </a>

                <a 
                  href="https://github.com/Priyanka2-ui" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">github.com/Priyanka2-ui</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="h-12 bg-background" {...field} />
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
                          <Input placeholder="your.email@example.com" className="h-12 bg-background" {...field} />
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
                            placeholder="Tell me about your project..." 
                            className="min-h-[150px] bg-background resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-semibold"
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
