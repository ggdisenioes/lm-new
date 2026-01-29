import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Target, TrendingUp, Users, Award, Compass, Briefcase, FileText, UserCheck, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import heroImage from "@/assets/hero-image.jpg";
import servicesImage from "@/assets/services-image.jpg";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-1/2 h-full">
            <motion.img
              src={heroImage}
              alt=""
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full object-cover"
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
                  <Calendar className="w-5 h-5" />
                  Agenda una consulta
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                <span>+15 años experiencia C-suite | Ejecutivos | Profesionales Senior</span>
              </div>
            </motion.div>
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

      {/* "Encuentra tu mejor versión si..." Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
              A lo largo de nuestra trayectoria, nos enfrentamos a decisiones importantes donde el rumbo no siempre es claro.
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Encuentra tu mejor versión si…
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: TrendingUp,
                text: "Dar un nuevo impulso a tu carrera\n Redefine tu trayectoria y asume nuevos desafíos con confianza.",
              },
              {
                icon: Target,
                text: "Posicionarte con más claridad y confianza\n Fortalece tu perfil, visibilidad y oportunidades frente a otros profesionales.",
              },
              {
                icon: Compass,
                text: "Integrarte o retornar al mercado laboral en España\n Aprovecha tu experiencia internacional y destaca en un entorno nuevo.",
              },
              {
                icon: Sparkles,
                text: "Acelerar tu trayectoria\n Trabaja tu marca personal y potencia tu proyección hacia nuevas responsabilidades.",
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
                Contacta conmigo para más información. Te ayudo a escoger la modalidad 
                que más se ajuste a tu situación y necesidad.
              </p>
              <Button asChild className="btn-gold">
                <Link to="/contacto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agenda una consulta
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
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Vas bien de formación, de imagen… incluso de gadgets.
            </p>
            <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">
              ¿Es momento de invertir en asesoramiento que transforme tu carrera?
            </p>
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
                description: "Define tu camino, explora oportunidades y refuerza tu posicionamiento profesional.",
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
                title: "CV / LinkedIn / Bio",
                description: "Rediseño y optimización para mejorar tu primera impresión.",
                href: "/servicios/rediseno-optimizacion",
              },
              {
                icon: MessageSquare,
                title: "Entrenamiento Entrevista",
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
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src={servicesImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
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
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Experiencia y visión del mercado
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Award,
                title: "",
                description: "",
              },
              {
                icon: Target,
                title: "",
                description: "",
              },
              {
                icon: Compass,
                title: "",
                description: "",
              },
              {
                icon: Users,
                title: "",
                description: "",
              },
            ].map((pillar, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-blue flex items-center justify-center">
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="sr-only">Icono</span>
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
              Con años de experiencia como headhunter y en desarrollo de talento, ayudo a ejecutivos y profesionales a definir estrategias personalizadas que aportan claridad, confianza y resultados en momentos clave de su carrera.
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
                  <Calendar className="w-5 h-5 mr-2" />
                  Agenda una consulta
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Lo que dicen mis clientes
            </h2>
            <div className="accent-line mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="card-premium p-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-5 h-5 rounded-full bg-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "Próximamente podrás leer testimonios reales de profesionales 
                    que han transformado su carrera con mi asesoramiento."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-blue" />
                    <div>
                      <p className="font-semibold text-foreground">Nombre Cliente</p>
                      <p className="text-sm text-muted-foreground">Cargo / Empresa</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
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

export default HomePage;
