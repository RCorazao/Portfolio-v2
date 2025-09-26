import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-card/50 border-t border-border">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Reison Corazao</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Desarrollador Fullstack especializado en crear soluciones escalables
                            y de alto rendimiento.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                >
                                    Sobre Mí
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                >
                                    Proyectos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                >
                                    Habilidades
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail size={16} />
                                <span>reison.dev@gmail.com</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Cusco, Perú
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-4">
                            <a
                                href="https://github.com/RCorazao"
                                target="_blank"
                                className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/reisoncorazao"
                                target="_blank"
                                className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>© {currentYear} Reison Corazao.</span>
                        <span>Cusco, Perú</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}