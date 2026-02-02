import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Linkedin, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { CONTACT, getWhatsAppUrl } from "@/lib/contact";

const ContactPage = () => {
  const whatsappIntroMessage =
    "Hola Lucinda, soy [Nombre]. Mi perfil de LinkedIn: [URL]. Me interesa: [Gestión de carrera / Búsqueda / CV-LinkedIn-Bio / Entrevista].";

  const agendaRequestMessage =
    "Hola Lucinda, me gustaría reservar una llamada. Te comparto mi perfil de LinkedIn (o CV): [URL] y mi objetivo en 1 frase: [texto]. ¿Podrías compartirme el enlace de agenda?";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-muted/30">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-medium mb-4">Contacto</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Da el primer paso{" "}
              <span className="text-gradient-blue">hoy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ¿Quieres avanzar en tu carrera, asumir nuevas responsabilidades y destacar profesionalmente?
              <br />
              Hablemos sobre cómo puedo ayudarte a optimizar tu impacto y proyectar tu carrera hacia donde quieres llegar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Elige la vía más directa
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Me encantará leerte. Puedes escribirme por LinkedIn o, si te resulta más cómodo, por WhatsApp.
              <br />
              Cuéntame en una frase qué estás buscando y, si quieres, comparte tu enlace de LinkedIn.
            </p>
            <div className="accent-line mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* LinkedIn */}
            <AnimatedSection>
              <a
                href={CONTACT.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium p-8 h-full block group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Linkedin className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">LinkedIn</h3>
                    <p className="text-muted-foreground text-sm">Canal principal de contacto</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Envíame tu enlace de LinkedIn y tu objetivo en una frase. Si lo prefieres, puedes adjuntar tu CV.
                </p>
                <div className="mt-6">
                  <span className="text-primary font-medium text-sm inline-flex items-center gap-2">
                    Ir a LinkedIn
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </a>
            </AnimatedSection>

            {/* WhatsApp */}
            <AnimatedSection delay={0.1}>
              <a
                href={getWhatsAppUrl(whatsappIntroMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium p-8 h-full block group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <MessageCircle className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Consulta breve y respuesta rápida</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ideal para una primera toma de contacto. Te recomiendo enviar tu LinkedIn y el servicio que te interesa.
                </p>
                <div className="mt-6">
                  <span className="text-primary font-medium text-sm inline-flex items-center gap-2">
                    Abrir WhatsApp
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </a>
            </AnimatedSection>

            {/* Agenda */}
            <AnimatedSection delay={0.2}>
              <div className="card-premium p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground">Agenda</h3>
                    <p className="text-muted-foreground text-sm">Con filtro previo</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Para reservar una llamada, primero envíame tu LinkedIn (o CV) por LinkedIn o WhatsApp.
                  Con eso te comparto el enlace de agenda.
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="btn-gold w-full">
                    <a href={getWhatsAppUrl(agendaRequestMessage)} target="_blank" rel="noopener noreferrer">
                      Pedir enlace de agenda
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={CONTACT.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                      Pedírmelo por LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Privacy notice */}
          <AnimatedSection delay={0.35} className="mt-10">
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Protección de datos</h4>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                Si me contactas por LinkedIn o WhatsApp, la información que compartas se usará únicamente para gestionar tu consulta y responderte.
                Consulta los detalles en las políticas siguientes.
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                <Link to="/privacidad" className="text-primary hover:underline">
                  Política de privacidad
                </Link>
                <Link to="/cookies" className="text-primary hover:underline">
                  Política de cookies
                </Link>
                <Link to="/proteccion-datos" className="text-primary hover:underline">
                  Protección de datos
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
