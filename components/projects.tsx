import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Stop Tutti Frutti – Aplicación Android",
      description: "Cliente Android desarrollado en Kotlin con Jetpack Compose para el juego multijugador Stop/Basta/Tutti Frutti, conectado en tiempo real a través de SignalR.",
      technologies: ["Kotlin", "Jetpack Compose", "SignalR", "Android"],
      features: [
        "Interfaz Nativa con Jetpack Compose",
        "Conexión en Tiempo Real con SignalR",
        "Soporte de Salas Multijugador",
        "Soporte para Español e Inglés",
        "Compatibilidad con Android SDK 36+"
      ],
      github: "https://github.com/RCorazao/StopGameAndroid",
      demo: ""
    },
    {
      title: "Stop/Tutti Frutti – Juego Multijugador Web",
      description: "Juego multijugador de palabras en tiempo real desarrollado como aplicación web, con soporte de reconexión, salas privadas y puntuaciones dinámicas.",
      technologies: [".NET", "Next.js", "MySQL", "Redis", "SignalR", "Docker"],
      features: [
        "Juego Multijugador en Tiempo Real",
        "Flujo de Reconexión y Presencia con SignalR",
        "Salas Privadas con Código",
        "Despliegue en VPS con Docker"
      ],
      github: "https://github.com/RCorazao/StopGameDemo",
      demo: "https://stop.reicode.site"
    },
    {
      title: "Sistema de Chat en Tiempo Real",
      description: "Aplicación de chat desarrollada con microservicios para autenticación y mensajería, desplegada en AWS con frontend en Angular y backend en .NET con SignalR.",
      technologies: [".NET", "Angular", "SignalR", "PostgreSQL", "MongoDB", "AWS EC2", "Cloudflare"],
      features: [
        "Arquitectura de Microservicios",
        "Autenticación con ASP.NET Identity",
        "Mensajería en Tiempo Real",
        "Despliegue en AWS EC2",
        "Gestión de Dominios con Cloudflare"
      ],
      github: "https://github.com/RCorazao/ChatApp-Backend",
      demo: ""
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Proyectos Destacados</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-foreground mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Características Principales</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="text-sm text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  {project?.github?.trim() && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} className="flex items-center gap-2">
                        <Github size={16} />
                        Código
                      </a>
                    </Button>
                  )}
                  {project?.demo?.trim() && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
