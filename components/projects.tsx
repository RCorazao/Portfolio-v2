"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { ExternalLink, Github, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

export function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState<{ images: string[]; title: string; projectIndex: number } | null>(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const openImageModal = (projectIndex: number, imageIndex: number) => {
    const project = projects[projectIndex]
    setModalProject({
      images: project.images,
      title: project.title,
      projectIndex
    })
    setModalImageIndex(imageIndex)
    setModalOpen(true)
  }

  const nextModalImage = () => {
    if (modalProject) {
      const newIndex = (modalImageIndex + 1) % modalProject.images.length
      setModalImageIndex(newIndex)
    }
  }

  const prevModalImage = () => {
    if (modalProject) {
      const newIndex = (modalImageIndex - 1 + modalProject.images.length) % modalProject.images.length
      setModalImageIndex(newIndex)
    }
  }

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [modalOpen])

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
      images: [
        "/projects/stop-android-1.webp",
        "/projects/stop-android-2.webp",
        "/projects/stop-android-3.webp",
        "/projects/stop-android-4.webp"
      ],
      github: "https://github.com/RCorazao/StopGameAndroid",
      demo: "https://play.google.com/store/apps/details?id=com.reicode.stopgame"
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
      images: [
        "/projects/stop-web-1.webp",
        "/projects/stop-web-2.webp",
        "/projects/stop-web-3.webp"
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
      images: [
        "/projects/chat-1.webp",
        "/projects/chat-2.webp",
        "/projects/chat-3.webp"
      ],
      github: "https://github.com/RCorazao/ChatApp-Backend",
      demo: ""
    }
  ]

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }))
  }

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Proyectos Destacados</h2>
          <div className="w-12 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-colors overflow-hidden">
              {/* Image Carousel */}
              <div className="relative h-64 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center overflow-hidden">
                <img
                  src={project.images[currentImageIndex[index] || 0]}
                  alt={`${project.title} - Imagen ${(currentImageIndex[index] || 0) + 1}`}
                  className="max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openImageModal(index, currentImageIndex[index] || 0)}
                />

                {/* Zoom indicator */}
                <div className="absolute top-3 left-3 bg-black/50 text-white p-1.5 rounded-full opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                  <ZoomIn size={14} />
                </div>

                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(index, project.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => nextImage(index, project.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                        className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${(currentImageIndex[index] || 0) === imgIndex
                          ? 'bg-white'
                          : 'bg-white/50'
                          }`}
                        aria-label={`Ver imagen ${imgIndex + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Image Counter */}
                <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {(currentImageIndex[index] || 0) + 1} / {project.images.length}
                </div>
              </div>

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

      {/* Image Modal */}
      {modalOpen && modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img
                src={modalProject.images[modalImageIndex]}
                alt={`${modalProject.title} - Imagen ${modalImageIndex + 1}`}
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              />

              {/* Preload adjacent images when modal is open */}
              {modalProject.images.map((imageSrc, index) => (
                index !== modalImageIndex && (
                  <img
                    key={`preload-${index}`}
                    src={imageSrc}
                    alt=""
                    className="hidden"
                    loading="eager"
                  />
                )
              ))}

              {/* Navigation Buttons - Over the image */}
              {modalProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextModalImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Image Indicators */}
            {modalProject.images.length > 1 && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {modalProject.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setModalImageIndex(imgIndex)}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${modalImageIndex === imgIndex
                      ? 'bg-white'
                      : 'bg-white/50 hover:bg-white/75'
                      }`}
                    aria-label={`Ver imagen ${imgIndex + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
