import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold">
                LM <span className="text-accent">Career Advisor</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Talent & Career Advisor | Job Search Strategy Expert | Headhunter
            </p>
            <div className="flex items-center gap-4">
              <a
                href={CONTACT.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Servicios", href: "/servicios" },
                { name: "Metodología", href: "/metodologia" },
                { name: "Sobre mí", href: "/sobre-mi" },
                { name: "Contacto", href: "/contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {[
                "Gestión de Carrera",
                "Búsqueda de Empleo",
                "CV y LinkedIn",
                "Entrevista de Trabajo",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/servicios"
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: "Política de Privacidad", href: "/privacidad" },
                { name: "Política de Cookies", href: "/cookies" },
                { name: "Protección de Datos", href: "/proteccion-datos" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              Copyright 2025 © | Todos los derechos reservados – Lucinda Martínez
            </p>
            <p className="text-white/50 text-xs">
              Diseñado con pasión para impulsar carreras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
