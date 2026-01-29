import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";

const PrivacyPage = () => (
  <div className="pt-32 pb-20">
    <div className="container-custom max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Política de Privacidad</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>Última actualización: Enero 2025</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Responsable del tratamiento</h2>
          <p>Lucinda Martínez - LM Career Advisor es responsable del tratamiento de sus datos personales.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Finalidad del tratamiento</h2>
          <p>Sus datos serán tratados para gestionar las consultas recibidas y prestar los servicios de asesoramiento profesional solicitados.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Base legal</h2>
          <p>El tratamiento de sus datos se basa en su consentimiento expreso y en la ejecución de un contrato de servicios.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Derechos</h2>
          <p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad contactando a través del formulario de contacto.</p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default PrivacyPage;
