import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Reison Corazao</h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
              Desarrollador Fullstack Senior
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Construyo aplicaciones escalables y de alto rendimiento utilizando tecnologías modernas. Me especializo en
              soluciones empresariales, arquitecturas multi-tenant y prácticas de código limpio con experiencia en todo
              el ciclo de desarrollo.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Button asChild>
                <a href="#contact">Contáctame</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">Ver Proyectos</a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/RCorazao"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/reisoncorazao"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:reison.dev@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="inline-block">
              <img
                src="/photo.png"
                alt="Reison Corazao"
                className="w-64 h-64 sm:w-84 sm:h-84 lg:w-100 lg:h-100 rounded-full object-cover border-4 border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
