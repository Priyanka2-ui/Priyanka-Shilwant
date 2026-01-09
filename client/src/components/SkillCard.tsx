import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SkillCardProps {
  category: string;
  skills: string;
  index: number;
}

export function SkillCard({ category, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card hover:bg-accent/5 rounded-2xl p-6 border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      <h3 className="text-xl font-bold font-display mb-4 text-foreground group-hover:text-primary transition-colors">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.split(", ").map((skill, i) => (
          <span 
            key={i} 
            className="inline-flex items-center text-sm px-3 py-1 bg-secondary text-secondary-foreground rounded-full border border-border group-hover:border-primary/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
