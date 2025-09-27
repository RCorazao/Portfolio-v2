import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Desarrollo Backend",
      skills: [".NET", "Laravel", "Node.js", "C#", "PHP", "APIs RESTful", "Entity Framework", "Eloquent"],
    },
    {
      title: "Desarrollo Frontend",
      skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    // {
    //   title: "Desarrollo Móvil",
    //   skills: ["Kotlin", "Android SDK", "Despliegue en Play Store"],
    // },
    {
      title: "Bases de Datos",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "T-SQL",
        "MongoDB",
        "Redis",
        "Diseño de BD",
        "Optimización de Consultas",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "GitHub Actions", "Linux", "Nginx", "AWS - Básico (EC2, S3, Lambda)", "Cloudflare", "Git", "GitHub", "GitLab", "Dokploy"]
    },
    {
      title: "Arquitectura y Prácticas",
      skills: [
        "Arquitectura Limpia",
        "Principios SOLID",
        "Multi-tenant",
        "Monolito",
        "Microservicios",
        "SCRUM",
        "KANBAN",
        "TDD",
        "Revisión de Código",
      ],
    },
    {
      title: "Tiempo Real y Comunicación",
      skills: [
        "SignalR",
        "WebSockets",
        "Apache Kafka",
        "Apps Tiempo Real",
        "Notificaciones Push (Firebase)",
        "Arquitectura Orientada a Eventos",
      ],
    },
    {
      title: "Aplicaciones Empresariales",
      skills: ["Sistemas ERP", "CRM", "Reportes", "Suscripciones y Pagos (Stripe)", "Automatización de Procesos"],
    },
    {
      title: "Metodologías Ágiles",
      skills: ["Scrum", "Kanban"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
