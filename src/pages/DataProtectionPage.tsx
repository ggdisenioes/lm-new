import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";

const DataProtectionPage = () => (
  <div className="pt-32 pb-20">
    <div className="container-custom max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Protección de Datos</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>LM Career Advisor se compromete a proteger la privacidad de los usuarios de este sitio web.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Medidas de seguridad</h2>
          <p>Implementamos medidas técnicas y organizativas para garantizar la seguridad de sus datos personales.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Conservación de datos</h2>
          <p>Sus datos se conservarán durante el tiempo necesario para la prestación de los servicios y el cumplimiento de obligaciones legales.</p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default DataProtectionPage;
