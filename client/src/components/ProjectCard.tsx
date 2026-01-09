import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  index: number;
}

export function ProjectCard({ title, description, tech, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold font-display leading-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:rotate-45 duration-300" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-auto pt-6 border-t border-border/50">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {tech.split(", ").map((t, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
