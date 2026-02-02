import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Linkedin, Briefcase, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import aboutImage from "@/assets/about-detail.jpg";
import { CONTACT } from "@/lib/contact";

const AboutPage = () => {
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
            <p className="text-primary font-medium mb-4">Sobre mí</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Hola, soy{" "}
              <span className="text-gradient-blue">Lucinda Martínez</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Talent & Career Advisor | Job Search Strategy Expert | Headhunter
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="accent-line-lg mb-8" />
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Mi trayectoria
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  En toda carrera profesional llega un momento en que, además del talento y la experiencia, lo que marca la diferencia es tu posicionamiento y las decisiones que tomas.
                </p>
                <p>
                  A lo largo de mi trayectoria como headhunter y en desarrollo de talento he tenido el privilegio de acompañar a cientos profesionales senior y ejecutivos —incluido C-suite— en momentos decisivos de su carrera.
                </p>
                <p>
                  Conozco bien el mercado. Entiendo lo que las organizaciones buscan y también lo que las personas necesitan para avanzar sin perder coherencia, incluso en situaciones de cambio y de incertidumbre.
                </p>
                <p>
                  Por eso mi trabajo se centra en aportar criterio, visión real de mercado y foco, para que puedas moverte con seguridad en situaciones que no admiten improvisación.
                </p>
                <p>
                  Siempre desde un acompañamiento cercano, exigente y adaptado a tu realidad.
                </p>
              </div>
              
              <div className="mt-8">
                <a
                  href={CONTACT.LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-secondary"
                >
                  <Linkedin className="w-5 h-5" />
                  Conecta en LinkedIn
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                
                <img
                  src={aboutImage}
                  alt="Detalle profesional"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Visión 360º del mercado laboral
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              He acompañado a perfiles de distintos sectores, áreas funcionales y niveles de responsabilidad.
            </p>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card-premium p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-blue flex items-center justify-center">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    Sectores de actividad
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Experiencia en compañías de diferentes dimensiones y modelos operativos: start‑ups hasta grandes multinacionales y empresas familiares.
                </p>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card-premium p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    Áreas funcionales
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Conocimiento estructural del negocio y de sus principales palancas. Entiendo cómo se articulan las funciones clave y cómo cada una influye en la evolución y el posicionamiento profesional.
                </p>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card-premium p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    Niveles profesionales
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Especialización en perfiles senior, ejecutivos y C‑suite. Cada nivel requiere un enfoque distinto y una estrategia a medida, alineada con el contexto y los objetivos profesionales.
                </p>
                </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="accent-line mx-auto mb-8" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Un enfoque centrado en la persona
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Creo firmemente que cada profesional tiene un valor único que aportar. 
                Mi misión es ayudarte a descubrirlo, articularlo y proyectarlo de manera 
                que genere oportunidades reales. No trabajo con fórmulas genéricas: 
                cada asesoramiento se adapta a tu situación, tus objetivos y tu ritmo.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                {[
                  { icon: Users, label: "+500 profesionales asesorados" },
                  { icon: Briefcase, label: "C-suite & ejecutivos" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-turquoise/10 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-turquoise" />
                    </div>
                    <p className="text-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-blue text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Ahora que me conoces un poco más…
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Cuéntame qué necesitas. Estaré encantada de escucharte y ayudarte 
              a dar el siguiente paso en tu carrera.
            </p>
            <Button asChild className="btn-gold">
              <Link to="/contacto">
                <Calendar className="w-5 h-5 mr-2" />
                Agenda una consulta
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
