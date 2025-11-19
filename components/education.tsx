import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Ingeniería Informática y de Sistemas",
      institution: "Universidad Nacional de San Antonio Abad del Cusco",
      period: "2018 - 2023",
      description:
        "",
    },
    {
      degree: "AWS Cloud Practitioner Essentials",
      institution: " AWS Training & Certification",
      period: "2025",
      description:
        "",
    },
    {
      degree: "Certificado de Formación Front-end React",
      institution: "Programa Oracle Next Education",
      period: "2023",
      description:
        "",
    },
    {
      degree: ".NET 8: Arquitectura, Seguridad, Monitoreo y Documentación de APIs",
      institution: "Udemy",
      period: "2024",
      description:
        "",
    },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Educación</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.degree}</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <p className="text-primary font-medium">{item.institution}</p>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
