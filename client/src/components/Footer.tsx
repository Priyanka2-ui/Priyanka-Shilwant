import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-display font-bold mb-2">Priyanka Shilwant</h2>
          <p className="text-muted-foreground text-sm">
            Building intelligent backend systems and agentic workflows.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Priyanka2-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:priyankashilwant321@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          {/* Add more social links if available */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-border/10 text-center md:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Priyanka Shilwant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
