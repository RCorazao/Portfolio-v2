export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Acerca de Mí</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-pretty">
            Soy un desarrollador fullstack apasionado con más de 2 años de experiencia construyendo aplicaciones
            robustas y escalables. Mi experiencia abarca tecnologías backend como .NET y Laravel, frameworks frontend
            modernos incluyendo React y Next.js, y desarrollo móvil con Kotlin para Android.
          </p>

          <p className="text-pretty">
            Me especializo en el desarrollo de aplicaciones empresariales y arquitecturas multi-tenant, combinando backends robustos con experiencias frontend modernas y atractivas. Mi enfoque se centra en escribir código mantenible, testeable y escalable, alineado con las necesidades del negocio. Trabajo bajo metodologías ágiles como Scrum y Kanban, lo que me permite adaptarme rápidamente a los cambios, colaborar de manera efectiva y entregar valor de forma contínua.
          </p>

          <p className="text-pretty">
            Actualmente, me enfoco en construir aplicaciones web de alto rendimiento con capacidades en tiempo real
            usando SignalR y WebSockets, mientras aprovecho prácticas modernas de DevOps con Docker, GitHub Actions y
            despliegues en la nube. Me apasiona crear soluciones que no solo cumplan con los requisitos técnicos sino
            que también brinden experiencias excepcionales al usuario.
          </p>
        </div>
      </div>
    </section>
  )
}
