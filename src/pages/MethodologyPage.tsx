import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Award, Target, Compass, Users, Search, MessageCircle, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";


const pillars = [
  {
    icon: Award,
    title: "Experiencia y visión del mercado",
    description: "Conocimiento profundo del ecosistema de talento y las dinámicas del mercado laboral español e internacional.",
  },
  {
    icon: Target,
    title: "Enfoque personalizado",
    description: "Cada persona es única. Mi asesoramiento se adapta a tu perfil, objetivos y contexto específico.",
  },
  {
    icon: Compass,
    title: "Claridad y dirección para cada etapa",
    description: "Te guío con un plan claro, sea cual sea el momento de tu carrera profesional.",
  },
  {
    icon: Users,
    title: "Apoyo constante y flexibilidad",
    description: "Acompañamiento cercano con la flexibilidad que necesitas para avanzar a tu ritmo.",
  },
];

const phases = [
  {
    number: "01",
    title: "Descubre",
    subtitle: "Tu valor profesional",
    icon: Search,
    items: [
      "Análisis profundo de tu perfil y trayectoria",
      "Evaluación del mercado y sus demandas",
      "Identificación de fortalezas, skills y áreas de desarrollo",
      "Definición de tu propuesta de valor como profesional",
    ],
    color: "from-primary to-turquoise",
  },
  {
    number: "02",
    title: "Transmite",
    subtitle: "Tu mensaje con impacto",
    icon: MessageCircle,
    items: [
      "Mensaje claro y estratégico: qué haces, por qué tú, hacia dónde vas",
      "Optimización CV / LinkedIn / Bio Ejecutiva",
      "Dominar entrevistas: estructura, tono, foco, narrativa",
      "Networking con intención: visibilidad y relaciones profesionales",
    ],
    color: "from-turquoise to-accent",
  },
  {
    number: "03",
    title: "Proyecta",
    subtitle: "Tu carrera al siguiente nivel",
    icon: Rocket,
    items: [
      "Estrategia de acción y búsqueda (incluido el mercado oculto)",
      "Objetivos viables y un plan concreto para alcanzarlos",
      "Decisiones con más criterio y foco profesional",
      "Seguimiento y ajustes continuos",
    ],
    color: "from-accent to-primary",
  },
];

const MethodologyPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-muted/30">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-primary font-medium mb-4">Metodología</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Descubre, transmite y{" "}
              <span className="text-gradient-blue">proyecta tu valor profesional</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Un enfoque personalizado y alineado a tu objetivo, con soluciones prácticas 
              que generan resultados reales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Los pilares de mi enfoque
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <StaggerItem key={index}>
                <div className="card-premium p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-blue flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              El proceso en 3 fases
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className={`relative ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row gap-8 lg:gap-16 items-center`}>
                  {/* Number */}
                  <div className="lg:w-1/3 flex justify-center">
                    <div className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                      <span className="text-6xl font-display font-bold text-white">{phase.number}</span>
                      <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center`}>
                        <phase.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3">
                    <div className="card-premium p-8 lg:p-10">
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-primary font-medium mb-6">{phase.subtitle}</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {phase.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-turquoise mt-2 shrink-0" />
                            <span className="text-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < phases.length - 1 && (
                    <div className="hidden lg:block absolute left-1/6 top-full w-0.5 h-12 bg-gradient-to-b from-border to-transparent" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Cómo es el proceso
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cuestionario-briefing inicial",
                desc: "Para entender tu contexto, objetivo y punto de partida.",
              },
              {
                title: "Sesiones 1:1",
                desc: "Trabajo personalizado por videoconferencia, enfocado a tu reto.",
              },
              {
                title: "Material de apoyo",
                desc: "Ejercicios, guías y recursos para consolidar avances.",
              },
              {
                title: "Revisión y seguimiento",
                desc: "Ajustes y soporte para asegurar implementación y resultados.",
              },
            ].map((step, idx) => (
              <StaggerItem key={idx}>
                <div className="card-premium p-8 h-full">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4 Keys */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Las 4 claves que trabajaremos
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Impulsa tu carrera con un acompañamiento experto y personalizado.
            </p>
            <div className="accent-line mx-auto mt-6" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Claridad",
                desc: "Define tu objetivo profesional y toma decisiones con criterio.",
              },
              {
                title: "Potenciación",
                desc: "Identifica fortalezas, propuesta de valor y posicionamiento.",
              },
              {
                title: "Proyección",
                desc: "Mejora CV, LinkedIn y entrevistas para proyectarte con impacto.",
              },
              {
                title: "Estrategia",
                desc: "Traza una hoja de ruta realista para avanzar en tu carrera.",
              },
            ].map((k, idx) => (
              <StaggerItem key={idx}>
                <div className="card-premium p-8 h-full">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {k.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {k.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-blue text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              ¿Listo/a para descubrir tu potencial?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Mi metodología está diseñada para acompañarte en cada paso. 
              Empecemos con una conversación.
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

export default MethodologyPage;
