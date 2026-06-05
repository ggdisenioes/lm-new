import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CONTACT, getWhatsAppUrl } from "@/lib/contact";

const ContactPage = () => {
  const whatsappIntroMessage =
    "Hola Lucinda, soy [Nombre]. Mi perfil de LinkedIn: [URL]. Me interesa: [Gestión de carrera / Búsqueda / CV-LinkedIn-Bio / Entrevista].";

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
              Hablemos sobre tu{" "}
              <span className="text-gradient-blue">próximo paso profesional</span>
            </h1>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Puedes escribirme por email, LinkedIn o WhatsApp. Cuéntame brevemente cuál es tu situación profesional y qué te gustaría trabajar o qué barreras estás encontrando.
              </p>
              <p>
                Si lo deseas, también puedes compartir tu CV o perfil de LinkedIn para darme más contexto sobre tu trayectoria profesional. A partir de ahí, podré orientarte sobre el servicio que mejor encaje contigo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Email */}
            <AnimatedSection>
              <a
                href={`mailto:${CONTACT.EMAIL}`}
                className="card-premium p-8 h-full block group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">Email</h3>
                </div>
                <span className="text-primary font-medium text-sm inline-flex items-center gap-2">
                  Enviar email
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
                <p className="text-muted-foreground text-sm mt-2 break-all">{CONTACT.EMAIL}</p>
              </a>
            </AnimatedSection>

            {/* LinkedIn */}
            <AnimatedSection delay={0.1}>
              <a
                href={CONTACT.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium p-8 h-full block group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2] transition-colors">
                    <Linkedin className="w-7 h-7 text-[#0A66C2] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">LinkedIn</h3>
                </div>
                <span className="text-primary font-medium text-sm inline-flex items-center gap-2">
                  Ir a LinkedIn
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </AnimatedSection>

            {/* WhatsApp */}
            <AnimatedSection delay={0.2}>
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
                  <h3 className="text-xl font-display font-semibold text-foreground">WhatsApp</h3>
                </div>
                <span className="text-primary font-medium text-sm inline-flex items-center gap-2">
                  Abrir WhatsApp
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </AnimatedSection>
          </div>

          {/* Privacy notice */}
          <AnimatedSection delay={0.35} className="mt-10">
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Información de protección de datos</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Trataremos tus datos únicamente para responder a tu consulta y, en su caso, gestionar la relación profesional. La base jurídica del tratamiento es la aplicación de medidas precontractuales o el interés legítimo. Más información en la <Link to="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.
              </p>
              <div className="flex flex-wrap gap-3 text-xs mt-4">
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
