import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, CheckCircle2, Compass, Briefcase, FileText, MessageSquare, Users, Clock, Video, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const servicesData: Record<string, {
  icon: typeof Compass;
  title: string;
  subtitle: string;
  description: string;
  forWhom: string[];
  whatWeWork: string[];
  results: string[];
  development: string[];
  sideBox?: {
    title?: string;
    items: string[];
  };
}> = {
  "gestion-carrera": {
    icon: Compass,
    title: "Gestión de Carrera",
    subtitle: "Define tu camino profesional con claridad y propósito",
    description: "Un programa diseñado para profesionales que buscan redefinir su trayectoria, asumir nuevos retos o simplemente reconectar con lo que les motiva. Te acompaño en un proceso de reflexión y acción que te permitirá tomar decisiones con confianza.",
    forWhom: [
      "Profesionales en transición o que buscan un cambio",
      "Ejecutivos que quieren redefinir su próximo paso",
      "Personas que sienten estancamiento o falta de dirección",
      "Directivos explorando funciones de gobierno corporativo",
      "Profesionales internacionales integrándose en España",
    ],
    whatWeWork: [
      "Análisis de tu perfil, fortalezas y áreas de desarrollo",
      "Exploración de valores, motivaciones y propósito",
      "Mapeo de oportunidades en el mercado actual",
      "Definición de objetivos claros y alcanzables",
      "Estrategia de posicionamiento y marca personal",
    ],
    results: [
      "Perspectiva y foco para ordenar ideas y prioridades",
      "Claridad estratégica sobre su posicionamiento profesional",
      "Mayor criterio y confianza en tus decisiones",
      "Saber cuándo y hacia donde moverte",
      "Un plan de acción definido y realista",
      "Estrategias prácticas para avanzar con sentido",
    ],
    development: [
      "Cuestionario-briefing inicial",
      "Sesiones 1:1 por videoconferencia",
      "Material de apoyo y ejercicios prácticos",
      "Revisión y seguimiento continuo",
    ],
  },
  "busqueda-empleo": {
    icon: Briefcase,
    title: "Búsqueda de Empleo",
    subtitle: "Estrategia y acción para acceder a mejores oportunidades",
    description: "Un programa diseñado para profesionales que quieren afrontar este momento clave de su carrera con perspectiva externa y enfoque estratégico. Te guío en un proceso estructurado que te ayudará a destacar tu valor y posicionamiento.",
    forWhom: [
      "Profesionales en búsqueda activa de empleo",
      "Ejecutivos en transición entre empresas",
      "Personas que quieren cambiar de sector o rol",
      "Quienes llevan tiempo buscando sin resultados",
    ],
    whatWeWork: [
      "Definición clara de perfil y objetivo profesional",
      "Estrategia de búsqueda multicanal",
      "Optimización de CV y LinkedIn",
      "Técnicas de networking efectivo",
      "Preparación para procesos de selección",
    ],
    results: [
      "Estrategia y planificación clara y enfocada",
      "Comunicación efectiva de tu valor",
      "Materiales profesionales optimizados",
      "Visibilidad de oportunidades del mercado oculto",
      "Motivación y confianza extra.",
      "Mayor efectividad en cada proceso",
    ],
    development: [
      "Cuestionario-briefing inicial",
      "Sesiones 1:1 por videoconferencia",
      "Material de apoyo y ejercicios prácticos",
      "Mejora de herramientas (CV / LinkedIn)",
      "Seguimiento y soporte continuo",
    ],
  },
  "rediseno-optimizacion": {
    icon: FileText,
    title: "CV / LinkedIn / Bio Ejecutiva",
    subtitle: "Rediseño y Optimización",
    description: "Estas herramientas son tus aliadas: úsalas para avanzar, destacar y abrir oportunidades. Bien elaboradas, se convierten en auténticas palancas estratégicas que refuerzan tu posicionamiento, amplían tu visibilidad y generan resultados reales en el mercado.",
    sideBox: {
      items: [
        "Credibilidad y consistencia",
        "Posicionamiento diferenciador",
        "Visibilidad estratégica",
        "Mayor impacto",
      ],
    },
    forWhom: [
      "Profesionales que quieren un CV actualizado y estratégico",
      "Ejecutivos que buscan mejorar su presencia en LinkedIn",
      "Ponentes que necesitan una bio ejecutiva clara e impactante",
      "Personas en búsqueda activa que aún no consiguen resultados",
    ],
    whatWeWork: [
      "Análisis de tu trayectoria, logros y objetivo profesional",
      "Identificación de tu propuesta de valor",
      "Ajuste a filtros, palabras clave y otros criterios de selección",
      "Estrategia de contenido y narrativa profesional",
      "Elección de una línea estética coherente con tu posicionamiento",
    ],
    results: [
      "Transformar cada documento en una palanca estratégica",
      "CV con más impacto y credibilidad",
      "Perfil de LinkedIn con más visibilidad y oportunidades",
      "Bio ejecutiva más sólida, memorable y diferenciadora.",
    ],
    development: [
      "Sesión de briefing",
      "Rondas de revisión y ajuste",
      "Entrega de documentos finales",
    ],
  },
  "entrenamiento-entrevista": {
    icon: MessageSquare,
    title: "Entrenamiento — Entrevista de Trabajo",
    subtitle: "Prepárate para este momento decisivo con confianza",
    description: "Cada entrevista es tu momento para conectar de forma profesional y efectiva. Con mi orientación, deja de ser un riesgo y se convierte en una oportunidad para proyectar credibilidad, seguridad y posicionamiento.",
    forWhom: [
      "Profesionales con entrevistas programadas",
      "Quienes sienten nervios o bloqueos ante entrevistas",
      "Ejecutivos que enfrentan procesos de alto nivel",
      "Personas que quieren mejorar su efectividad en entrevistas",
    ],
    whatWeWork: [
      "Análisis del puesto y la empresa objetivo",
      "Narrativa estratégica y proyección de credibilidad",
      "Estructuración de respuestas efectivas",
      "Manejo de preguntas difíciles y objeciones",
      "Negociación de condiciones y salario",
      "Simulacros de entrevista con feedback",
    ],
    results: [
      "Confianza y destreza ante cualquier entrevista",
      "Respuestas estructuradas y convincentes",
      "Estrategia de comunicación personalizada",
      "Capacidad para negociar con seguridad",
      "Consolidar tu posicionamiento y destacar",
    ],
    development: [
      "Información previa sobre el puesto y el proceso",
      "Sesiones 1:1",
      "Material de apoyo para reforzar técnicas y conceptos",
      "Feedback detallado y plan de mejora",
    ],
  },
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId || ""];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Servicio no encontrado</h1>
          <Button asChild>
            <Link to="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-muted/30">
        <div className="container-custom relative z-10">
          <Link to="/servicios" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={service.sideBox ? "grid lg:grid-cols-12 gap-10 items-start" : "max-w-3xl"}
          >
            <div className={service.sideBox ? "lg:col-span-8" : ""}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-blue flex items-center justify-center mb-8">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">{service.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <Button asChild className="btn-gold">
                <Link to="/contacto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agenda una consulta
                </Link>
              </Button>
            </div>

            {service.sideBox && (
              <div className="lg:col-span-4">
                <div className="card-premium p-8">
                  {service.sideBox.title && (
                    <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                      {service.sideBox.title}
                    </h3>
                  )}
                  <ul className="space-y-3">
                    {service.sideBox.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-turquoise mt-2 shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* For Whom */}
      <section className="section-padding-sm bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                ¿Para quién es este servicio?
              </h2>
              <div className="space-y-4">
                {service.forWhom.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-turquoise shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                ¿Qué trabajaremos?
              </h2>
              <div className="space-y-4">
                {service.whatWeWork.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding-sm bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                ¿Qué obtendrás?
              </h2>
              <div className="space-y-4">
                {service.results.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-foreground text-lg pt-1">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-muted/50 rounded-2xl p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Desarrollo del servicio
                </h3>
                <div className="space-y-4">
                  {service.development.map((item, index) => {
                    const icons = [FileCheck, Video, Users, Clock];
                    const ItemIcon = icons[index % icons.length];
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <ItemIcon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-blue text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              ¿Listo/a para dar el siguiente paso?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Agenda una consulta para conocer más sobre este servicio y cómo puede ayudarte.
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

export default ServiceDetailPage;
