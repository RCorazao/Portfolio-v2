import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      period: "Julio 2025 — Setiembre 2025",
      title: "Programador - Canales digitales",
      company: "CAJA MUNICIPAL DE AHORRO Y CRÉDITO CUSCO S.A.",
      description: "Participación en la integración de pagos interbancarios mediante canales digitales. Gestión de transacciones y consultas en SQL Server, elaboración de reportes en RDL y apoyo en procesos ETL orientados a optimizar el intercambio y la calidad de la información entre sistemas.",
      tasks: [
        "Apoyo en la integración de pagos de créditos interbancarios mediante canales digitales.",
        "Mantenimiento y ajuste de microservicios desarrollados en Spring Boot.",
        "Manejo de transacciones, consultas en SQL Server y generación de reportes (RDL)",
        "Colaboración en procesos ETL para optimizar el intercambio de información entre sistemas"
      ],
      technologies: [".NET", "Spring boot", "SQL Server", "SSIS", "T-SQL"]
    },
    {
      period: "Julio 2023 — Julio 2025",
      title: "Programador Backend .NET, Laravel",
      company: "GEOR Aplicaciones S.A.C.",
      description: "Desarrollo y optimización de ERP multi-tenant en Laravel y CRM empresarial en .NET, implementando arquitecturas modulares, comunicación en tiempo real y pagos recurrentes, asegurando escalabilidad y eficiencia en ambas plataformas.",
      tasks: [
        "Migración del ERP en Laravel hacia una arquitectura modular multi-tenant.",
        "Implementación de gestión granular de roles y permisos por cliente.",
        "Integración de Stripe para suscripciones, pagos recurrentes y automatizaciones.",
        "Optimización del rendimiento del ERP mediante caching y consultas eficientes.",
        "Desarrollo de servicios backend escalables para el CRM en .NET.",
        "Implementación de comunicación en tiempo real con SignalR.",
        "Integración de Apache Kafka para mensajería asincrónica entre servicios.",
      ],
      technologies: [".NET", "Laravel", "Stripe", "MySQL", "Apache Kafka", "SignalR", "Docker"]
    },
    {
      period: "Julio 2025 — Agosto 2025",
      title: "Desarrollador Fullstack y Líder Técnico",
      company: "Academia Preuniversitaria (Proyecto Freelance)",
      description: "Desarrollo de un panel administrativo para una academia preuniversitaria, coordinando el trabajo en equipo y asegurando la integración de backend en Laravel con frontend en React. El sistema permitió la gestión de estudiantes, docentes, asistencia y reportes.",
      tasks: [
        "Diseño de la arquitectura del sistema y definición de requerimientos funcionales.",
        "Desarrollo del backend en Laravel con autenticación, roles y permisos.",
        "Implementación del frontend en React con una interfaz responsiva y amigable.",
        "Gestión de estudiantes, docentes, asistencia mediante escaneo de qr y generación de reportes.",
        "Coordinación con otro desarrollador, liderando la planificación y control de entregables.",
        "Aplicación de buenas prácticas de desarrollo y metodologías ágiles (Scrum)."
      ],
      technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "GitHub"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Experiencia</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border bg-card/50">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Period */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="text-sm text-muted-foreground font-medium mb-2">
                      {exp.period}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="text-primary font-medium mb-4">{exp.company}</div>

                    {/* Short description */}
                    <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                      {exp.description}
                    </p>

                    {/* Tasks list */}
                    {exp.tasks && exp.tasks.length > 0 && (
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        {exp.tasks.map((task, idx) => (
                          <li key={idx}>{task}</li>
                        ))}
                      </ul>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
