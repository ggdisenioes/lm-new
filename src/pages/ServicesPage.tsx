import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Compass, Briefcase, FileText, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";


const services = [
  {
    id: "gestion-carrera",
    icon: Compass,
    title: "Gestión de Carrera",
    subtitle: "Define tu camino profesional con claridad",
    description: "Te ayudo a definir tu camino, explorar oportunidades y reforzar tu posicionamiento en el mercado.",
    benefits: [
      "Identificar tus fortalezas y cómo potenciarlas",
      "Superar obstáculos y bloqueos profesionales",
      "Reconectar con tus valores y motivaciones",
      "Obtener perspectiva del mercado actual",
      "Desarrollar una estrategia personalizada",
    ],
    color: "from-primary to-turquoise",
  },
  {
    id: "busqueda-empleo",
    icon: Briefcase,
    title: "Búsqueda de Empleo",
    subtitle: "Transición estratégica hacia nuevas oportunidades",
    description: "Plan de acción práctico para acceder al mercado oculto y posicionarte con éxito.",
    benefits: [
      "Definir perfil, objetivo y estrategia claros",
      "Diferenciarte de otros candidatos",
      "Optimizar CV, LinkedIn y mensajes de networking",
      "Actuar con seguridad y eficacia",
    ],
    color: "from-turquoise to-primary",
  },
  {
    id: "rediseno-optimizacion",
    icon: FileText,
    title: "CV / LinkedIn / Bio Ejecutiva",
    subtitle: "Rediseño y Optimización",
    description: "Estas herramientas son tus aliadas: úsalas para avanzar, destacar y abrir oportunidades. Bien elaboradas, se convierten en palancas estratégicas.",
    benefits: [
      "CV profesional y carta de presentación",
      "Perfil LinkedIn optimizado para visibilidad",
      "Bio ejecutiva para foros y ponencias",
      "Mensajes consistentes en todos los canales",
    ],
    color: "from-accent to-turquoise",
  },
  {
    id: "entrenamiento-entrevista",
    icon: MessageSquare,
    title: "Entrenamiento — Entrevista de Trabajo",
    subtitle: "Prepárate para este momento decisivo",
    description: "Cada entrevista es tu momento para conectar de forma profesional y efectiva y proyectar credibilidad, seguridad y posicionamiento.",
    benefits: [
      "Superar bloqueos y nervios",
      "Estructurar respuestas efectivas",
      "Negociar salario con seguridad",
      "Manejar objeciones y preguntas difíciles",
    ],
    color: "from-primary to-accent",
  },
];

const ServicesPage = () => {
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
            <p className="text-primary font-medium mb-4">Servicios</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Programas de asesoramiento{" "}
              <span className="text-gradient-blue">personalizado e individual</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Avanza con mayor seguridad y confianza en tu carrera. 
              Mejora el impacto de la primera impresión.
            </p>
            <Button asChild className="btn-gold">
              <Link to="/contacto">
                <Calendar className="w-5 h-5 mr-2" />
                Agenda una consulta
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <StaggerContainer className="space-y-12">
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <Link to={`/servicios/${service.id}`} className="block group">
                  <div className="card-premium p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
                          {service.title}
                        </h2>
                        <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                          Más información
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-turquoise shrink-0 mt-0.5" />
                            <span className="text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
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
              ¿No estás seguro/a de cuál es el servicio adecuado?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Agenda una consulta gratuita y te ayudo a identificar cuál es la opción 
              que mejor se adapta a tu situación y objetivos.
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

export default ServicesPage;
