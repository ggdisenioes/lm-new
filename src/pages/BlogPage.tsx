import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

const categories = [
  "Currículum Vitae",
  "Carta de presentación",
  "LinkedIn",
  "Biografía",
  "Búsqueda de empleo",
  "Desarrollo profesional",
];

// Placeholder blog posts
const posts = [
  {
    id: 1,
    title: "Cómo optimizar tu perfil de LinkedIn para atraer oportunidades",
    excerpt: "Tu perfil de LinkedIn es tu carta de presentación profesional. Descubre las claves para destacar y atraer a los reclutadores adecuados.",
    category: "LinkedIn",
    date: "15 Ene 2025",
  },
  {
    id: 2,
    title: "Los errores más comunes en un CV ejecutivo y cómo evitarlos",
    excerpt: "Un CV efectivo puede abrirte puertas. Conoce los errores que debes evitar para que tu currículum destaque entre la competencia.",
    category: "Currículum Vitae",
    date: "10 Ene 2025",
  },
  {
    id: 3,
    title: "Networking estratégico: más allá de conectar en LinkedIn",
    excerpt: "El networking efectivo va más allá de enviar solicitudes de conexión. Aprende a construir relaciones profesionales de valor.",
    category: "Desarrollo profesional",
    date: "5 Ene 2025",
  },
  {
    id: 4,
    title: "Cómo preparar una carta de presentación que genere interés",
    excerpt: "La carta de presentación sigue siendo relevante. Descubre cómo escribir una que capture la atención del reclutador.",
    category: "Carta de presentación",
    date: "28 Dic 2024",
  },
  {
    id: 5,
    title: "Estrategias para una búsqueda de empleo efectiva en 2025",
    excerpt: "El mercado laboral evoluciona constantemente. Conoce las estrategias más efectivas para tu búsqueda de empleo este año.",
    category: "Búsqueda de empleo",
    date: "20 Dic 2024",
  },
  {
    id: 6,
    title: "Cómo escribir una biografía profesional impactante",
    excerpt: "Tu biografía ejecutiva es clave en foros, ponencias y webs corporativas. Aprende a redactar una que refleje tu valor.",
    category: "Biografía",
    date: "15 Dic 2024",
  },
];

const BlogPage = () => {
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
            <p className="text-primary font-medium mb-4">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Recursos y estrategias para{" "}
              <span className="text-gradient-blue">tu desarrollo profesional</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Artículos, consejos y reflexiones para impulsar tu carrera.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 text-foreground text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <article className="card-premium overflow-hidden h-full flex flex-col group">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-turquoise/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-muted-foreground text-sm mb-3">{post.date}</p>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              ¿Necesitas asesoramiento personalizado?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Los artículos son un buen punto de partida, pero cada situación es única. 
              Hablemos sobre cómo puedo ayudarte.
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

export default BlogPage;
