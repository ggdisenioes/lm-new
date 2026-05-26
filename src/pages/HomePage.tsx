import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Target, TrendingUp, Users, Award, Compass, Briefcase, FileText, MessageSquare, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import heroImage from "@/assets/hero-image.png";
import servicesImage from "@/assets/services-image.png";

const testimonials = [
  {
    role: "Operations Manager",
    industry: "Fintech / Supply Chain Finance",
    text: "Me encontraba en un proceso de transición del mercado argentino al español y no tenía claro cómo posicionar mi perfil en un entorno completamente diferente. El trabajo con Lucinda me ayudó a entender el valor real de mi trayectoria y a comunicar mi experiencia de forma más estratégica, dándome además mucha más seguridad en el proceso. Destaco especialmente el análisis personalizado de mi perfil, la preparación para entrevistas y el conocimiento actualizado del mercado laboral.",
  },
  {
    role: "Director de Producto y Transformación Digital",
    industry: "Telecomunicaciones",
    text: "Tras más de 15 años en la misma empresa, me enfrenté a una salida profesional compleja y a un proceso de búsqueda en el que no entendía por qué no avanzaba en entrevistas. El trabajo con Lucinda me ayudó a analizar mi situación con mayor objetividad y menos peso emocional, ganar seguridad y reformular cómo comunicar mi trayectoria y mi valor profesional. Destaco especialmente su capacidad para entender cuál es el punto de partida de la persona a la que está acompañando y lo que necesita y su conocimiento del mercado y de la toma de decisiones complejas de carrera.",
  },
  {
    role: "Socia-Fundadora",
    industry: "Firma de servicios profesionales",
    text: "Tras la venta de mi empresa y haber liderado la integración durante dos años, necesitaba revisar y ordenar mi experiencia para afrontar una nueva etapa profesional. El trabajo con Lucinda me ayudó a clarificar prioridades, estructurar mis fortalezas y tomar decisiones con más seguridad sobre cómo posicionarme. Fue un proceso de reflexión que me permitió dar valor a mis 30 años de trayectoria hacia la participación en Consejos Asesores de empresas familiares y pymes. Destaco especialmente la personalización, la flexibilidad y el apoyo en la construcción del mensaje de valor, así como el conocimiento actualizado del mercado.",
  },
  {
    role: "Senior Credit Manager",
    industry: "Audiovisual",
    text: "Me encontraba en un proceso de transición profesional tras dejar mi puesto de muchos años en Barcelona para regresar a Bizkaia. Necesitaba reenfocar mi perfil y dar dirección a mi siguiente etapa profesional. El proceso me ayudó a identificar mis fortalezas, ganar claridad sobre mis oportunidades y afrontar la búsqueda con mayor seguridad y estrategia. Destaco especialmente la capacidad de análisis, la visión externa objetiva y el enfoque práctico y personalizado. Además, valoro mucho la cercanía y la disponibilidad de Lucinda durante todo el proceso.",
  },
  {
    role: "Director de Servicios",
    industry: "Telecomunicaciones y Servicios Digitales",
    text: "Había dejado voluntariamente mi anterior empleo y estaba intentando reconducir mi carrera hacia sectores distintos a los que había trabajado toda mi vida. El trabajo con Lucinda me ayudó a entender cómo funciona realmente el mercado laboral, reorganizar mi historia profesional e identificar qué estaba frenando mi acceso a oportunidades. Esto me dio más claridad y seguridad para avanzar de forma autónoma. Destaco especialmente su capacidad de empatía, así como el acompañamiento en la construcción de la narrativa profesional, la comprensión del mercado y el apoyo en la toma de decisiones.",
  },
  {
    role: "Director Corporativo",
    industry: "Audiovisual y broadcasting",
    text: "Después de más de 25 años en la misma empresa, atravesaba un momento de gran desorientación laboral y profesional. Desde el primer contacto encontré seguridad, confianza y un acompañamiento cercano que me ayudó a afrontar esta transición con más claridad. Las sesiones me aportaron guía, reflexión y estrategia para avanzar en el proceso de salida voluntaria y reincorporación al mercado laboral. Destaco especialmente el apoyo humano y profesional recibido, sintiendo en todo momento que contaba con una persona de confianza a la que acudir.",
  },
  {
    role: "Director General",
    industry: "Servicios aeroportuarios",
    text: "Necesitaba apoyo para centrarme en una nueva etapa laboral tras la salida voluntaria de mi empresa con la que estuve vinculado muchos años, definir mi perfil profesional, ponerlo en valor y posicionarlo mejor en el mercado. Las sesiones me aportaron exactamente lo que necesitaba en ese momento, ayudándome a avanzar con claridad y foco lo que me permitió construir una base sólida para afrontar esta nueva fase profesional. Destaco especialmente la empatía y el acompañamiento recibido durante todo el proceso.",
  },
  {
    role: "CFO",
    industry: "Comunicación y marketing digital",
    text: "Inicié el proceso de asesoramiento con el objetivo reposicionar mi perfil profesional. Tenía claro que quería seguir creciendo y necesitaba ordenar ideas, ganar foco y entender mejor cómo reforzar mi posicionamiento desde una visión más estratégica. El trabajo con Lucinda me ayudó a clarificar mi propuesta diferencial, reconocer fortalezas que no estaba poniendo en valor y ganar confianza para mirar mi trayectoria con más ambición y alineada con mi potencial. Destaco especialmente su capacidad para aportar una mirada externa, objetiva y muy humana, ayudándome a aterrizar ideas y a definir mejor cómo posicionarme profesionalmente.",
  },
];

const TestimonialsCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = { mobile: 1, desktop: 2 };

  // We show 2 testimonials at a time on desktop, 1 on mobile
  const totalPages = Math.ceil(testimonials.length / itemsPerPage.desktop);

  const next = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div>
      {/* Desktop: 2 per page */}
      <div className="hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            {testimonials
              .slice(currentPage * 2, currentPage * 2 + 2)
              .map((t, i) => (
                <TestimonialCard key={currentPage * 2 + i} testimonial={t} />
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile: 1 per page */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            <TestimonialCard testimonial={testimonials[currentPage % testimonials.length]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentPage ? "bg-primary" : "bg-border hover:bg-muted-foreground/40"
              }`}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="card-premium p-8 h-full flex flex-col">
    <Quote className="w-8 h-8 text-primary/20 mb-4 flex-shrink-0" />
    <p className="text-muted-foreground italic leading-relaxed mb-6 flex-grow">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
      <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center flex-shrink-0">
        <span className="text-white font-semibold text-sm">
          {testimonial.role.charAt(0)}
        </span>
      </div>
      <div>
        <p className="font-semibold text-foreground text-sm">{testimonial.role}</p>
        <p className="text-xs text-muted-foreground">{testimonial.industry}</p>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-1/2 h-full">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Claim */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium mb-4 flex items-center gap-2 text-lg"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              Tu talento, tu visión, tus logros
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6"
            >
              Impulsa tu carrera y{" "}
              <span className="text-primary">proyecta tu valor</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
            >
              Asesoramiento experto a tu medida.
              <br />
              Activa tu estrategia profesional y define tu dirección con claridad.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild className="btn-gold gap-2">
                <Link to="/servicios">
                  Descubre cómo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild className="btn-secondary gap-2">
                <Link to="/contacto">
                  Escríbeme
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
</div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* "Encuentra tu mejor versión para..." Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
              A lo largo de nuestra trayectoria, nos enfrentamos a decisiones importantes donde el rumbo no siempre es claro.
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Encuentra tu mejor versión para…
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: TrendingUp,
                text: "Dar un nuevo impulso a tu carrera.\n Redefine tu trayectoria y asume nuevos desafíos con confianza.",
              },
              {
                icon: Target,
                text: "Posicionarte con más claridad y confianza.\n Fortalece tu perfil, visibilidad y oportunidades frente a otros profesionales.",
              },
              {
                icon: Compass,
                text: "Integrarte o retornar al mercado laboral en España.\n Aprovecha tu experiencia internacional y destaca en un entorno nuevo.",
              },
              {
                icon: Sparkles,
                text: "Empezar con foco tu desarrollo profesional.\n Trabaja tu marca personal y potencia tu proyección desde el inicio.",
              },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="card-premium p-6 flex gap-4 h-full">
                  <div className="icon-container-gold shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="text-center mt-10">
            <Button asChild className="btn-secondary">
              <Link to="/servicios">
                Descubre cómo avanzar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* "Cuéntame qué necesitas" CTA */}
      <section className="py-20 bg-muted/50">
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="card-premium p-10 sm:p-14 text-center relative overflow-hidden">
              {/* Accent border top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-turquoise via-primary to-accent rounded-full" />
              
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                Cuéntame qué necesitas
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                Marca la diferencia con asesoramiento experto. Te ayudo a escoger la modalidad
                que más se ajuste a tu situación y necesidad.
              </p>
              <Button asChild className="btn-gold">
                <Link to="/contacto">
                  Escríbeme
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Potencia tu impacto con asesoramiento estratégico
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Compass,
                title: "Gestión de Carrera",
                description: "Estrategia y dirección para tu carrera: ajusta tu trayectoria y evoluciona con confianza.",
                href: "/servicios/gestion-carrera",
              },
              {
                icon: Briefcase,
                title: "Búsqueda de Empleo",
                description: "Transición estratégica hacia nuevas oportunidades.",
                href: "/servicios/busqueda-empleo",
              },
              {
                icon: FileText,
                title: "CV / LinkedIn / Bio Ejecutiva",
                description: "Rediseño y optimización para mejorar tu primera impresión.",
                href: "/servicios/rediseno-optimizacion",
              },
              {
                icon: MessageSquare,
                title: "Entrevista de Trabajo",
                description: "Estrategia, técnicas y confianza para destacar y dejar huella.",
                href: "/servicios/entrenamiento-entrevista",
              },
            ].map((service, index) => (
              <StaggerItem key={index}>
                <Link to={service.href} className="block h-full">
                  <div className="card-premium p-8 h-full flex flex-col group">
                    <div className="icon-container mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <span className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Más información
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="text-center mt-10">
            <p className="text-muted-foreground">
              Cada servicio se adapta a tu punto de partida y a tu objetivo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Narrative Block */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="accent-line-lg mb-6" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Marca la diferencia con asesoramiento experto
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Hay un punto en el que avanzar depende menos de tu experiencia y más de tu estrategia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Contar con una mirada externa aporta foco y otra perspectiva, ayuda a salir del ensayo-error y a tomar decisiones que realmente importan. Porque no se trata solo de avanzar, sino de hacerlo en la dirección correcta para ti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Trabajamos desde lo que te distingue: tu contexto, tus valores y tus objetivos. Afinamos aquello que te diferencia y te posiciona mejor frente a otros profesionales.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El resultado: decisiones más claras, seguras y una proyección real de tu potencial en el mercado laboral.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="hidden lg:block">
              <div className="relative">
                <img
                  src={servicesImage}
                  alt="Asesoramiento profesional"
                  className="w-full rounded-2xl opacity-85"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/30 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Experiencia y visión del mercado",
                description: "Conocimiento profundo del ecosistema de talento y sus dinámicas clave.",
              },
              {
                icon: Target,
                title: "Enfoque personalizado",
                description: "Asesoramiento adaptado a tu perfil, objetivos y contexto profesional.",
              },
              {
                icon: Compass,
                title: "Claridad y dirección en cada etapa",
                description: "Aporto foco, criterio y una hoja de ruta para avanzar con seguridad.",
              },
              {
                icon: Users,
                title: "Acompañamiento flexible",
                description: "Apoyo continuo para asegurar progreso y avanzar a tu ritmo.",
              },
            ].map((pillar, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-blue flex items-center justify-center">
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Button asChild className="btn-secondary">
              <Link to="/metodologia">
                Descubre mi metodología
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                Conseguirás
              </h2>
              <div className="accent-line mb-8" />
              <ul className="space-y-4">
                {[
                  "Desarrollar una visión estratégica de tu perfil",
                  "Maximizar tu potencial",
                  "Conectar tus expectativas con un plan de acción tangible",
                  "Un plan viable para alcanzar tus objetivos profesionales",
                  "Definir qué te diferencia y cómo comunicarlo",
                  "Identificar cuándo y hacia dónde dar el siguiente paso",
                  "CV efectivo, entrevistas con destreza y networking optimizado",
                  "Motivación y confianza extra para afrontar el cambio",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-turquoise/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-turquoise" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-turquoise/10 to-accent/10 rounded-3xl blur-2xl" />
                <img
                  src={servicesImage}
                  alt="Profesionales en reunión"
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Authority Block */}
      <section className="section-padding bg-foreground text-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8" />
            <p className="text-xl sm:text-2xl leading-relaxed mb-8 text-white/90">
              Un enfoque cercano y estratégico, respaldado por una sólida experiencia en executive search y desarrollo de talento, para ayudarte a entender mejor tu valor y proyectar tu carrera con mayor dirección y confianza.
            </p>
            <p className="text-accent font-display font-semibold text-lg mb-2">
              Lucinda Martínez
            </p>
            <p className="text-white/60 text-sm">
              Talent & Career Advisor | Job Search Strategy Expert | Headhunter
            </p>
            <div className="mt-10">
              <Button asChild className="btn-gold">
                <Link to="/contacto">
                  Escríbeme
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Lo que dicen mis clientes
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-turquoise/5 via-transparent to-transparent" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Da el primer paso hoy
            </h2>
            <div className="accent-line mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              ¿Quieres avanzar en tu carrera, asumir nuevas responsabilidades y destacar profesionalmente?
              <br />
              Hablemos sobre cómo puedo ayudarte a optimizar tu impacto y proyectar tu carrera hacia donde quieres llegar.
            </p>
            <Button asChild className="btn-gold text-lg px-10 py-5">
              <Link to="/contacto">
                Escríbeme
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;
