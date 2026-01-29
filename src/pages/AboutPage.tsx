import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Linkedin, Briefcase, Users, Award, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import aboutImage from "@/assets/about-detail.jpg";
import { CONTACT } from "@/lib/contact";

const sectors = ["Tecnología", "Industria", "Servicios", "Startups", "Energía", "Retail", "Salud", "Finanzas"];
const areas = ["Recursos Humanos", "Finanzas", "Operaciones", "Marketing", "Ingeniería", "Comercial", "Dirección General"];
const levels = ["C-level / Alta Dirección", "Dirección", "Senior Management", "Mandos intermedios", "Profesionales Senior", "Internacional"];

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
                  Soy Lucinda Martínez, headhunter y asesora de carrera con más de 15 años de experiencia en selección de talento y acompañamiento profesional.
                </p>
                <p>
                  A lo largo de mi trayectoria, he trabajado con perfiles ejecutivos, directivos y profesionales senior, ayudándoles a definir su estrategia, optimizar su posicionamiento y avanzar con seguridad en un mercado cada vez más competitivo.
                </p>
                <p>
                  Mi propósito es ayudarte a tomar decisiones con claridad, mejorar tu proyección y activar tu potencial con un enfoque práctico y personalizado.
                </p>
                <p>
                  Trabajo desde la estrategia, pero también desde la escucha y la realidad de cada profesional: lo que te distingue, lo que te mueve y hacia dónde quieres llegar.
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
                <div className="flex flex-wrap gap-3">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
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
                <div className="flex flex-wrap gap-3">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 rounded-full bg-accent/20 text-foreground text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card-premium p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    Niveles de responsabilidad
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {levels.map((level) => (
                    <span
                      key={level}
                      className="px-4 py-2 rounded-full bg-muted/60 text-foreground text-sm font-medium"
                    >
                      {level}
                    </span>
                  ))}
                </div>
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
              <div className="grid sm:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Award, label: "+15 años de experiencia" },
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
