import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";

const CookiesPage = () => (
  <div className="pt-32 pb-20">
    <div className="container-custom max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Política de Cookies</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Este sitio web utiliza cookies para mejorar la experiencia del usuario.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Tipos de cookies utilizadas</h2>
          <p>Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas para entender cómo se utiliza el sitio.</p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default CookiesPage;
