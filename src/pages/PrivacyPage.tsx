import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";

const PrivacyPage = () => (
  <div className="pt-32 pb-20">
    <div className="container-custom max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Política de Privacidad</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm">Última actualización: Mayo 2026</p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Responsable del tratamiento</h2>
          <p>
            <strong>Identidad:</strong> Lucinda Martínez — LM Career Advisor<br />
            <strong>Correo electrónico:</strong> rgpd@lmcareeradvisor.com<br />
            <strong>Sitio web:</strong> lmcareeradvisor.com
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Finalidad del tratamiento</h2>
          <p>Los datos personales que nos facilites serán tratados con las siguientes finalidades:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder a las consultas y solicitudes de información recibidas a través de los canales de contacto habilitados (email, LinkedIn, WhatsApp).</li>
            <li>Gestionar la comunicación profesional solicitada y la relación precontractual o contractual derivada.</li>
            <li>Prestar los servicios de asesoramiento profesional contratados.</li>
            <li>Enviar comunicaciones relacionadas con los servicios, siempre que exista consentimiento previo.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Legitimación</h2>
          <p>La base legal para el tratamiento de tus datos es:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Interés legítimo</strong> en responder a las solicitudes de información o contacto recibidas.</li>
            <li><strong>Relación precontractual</strong> que pueda derivarse de la comunicación iniciada.</li>
            <li><strong>Ejecución de un contrato</strong> de prestación de servicios, cuando sea el caso.</li>
            <li><strong>Consentimiento del interesado</strong> para el envío de comunicaciones comerciales.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Destinatarios</h2>
          <p>
            No se cederán datos a terceros, salvo obligación legal. No se realizan transferencias internacionales de datos. Los datos podrán ser tratados por prestadores de servicios necesarios para el funcionamiento del sitio web (hosting, analítica), con los que se han firmado los correspondientes acuerdos de encargo de tratamiento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Conservación de datos</h2>
          <p>
            Los datos personales se conservarán mientras se mantenga la relación profesional y, una vez finalizada, durante el tiempo necesario para atender posibles responsabilidades legales. Los datos de contacto se conservarán mientras no se solicite su supresión.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Derechos del interesado</h2>
          <p>Puedes ejercer los siguientes derechos en cualquier momento:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acceso:</strong> conocer qué datos personales están siendo tratados.</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
            <li><strong>Limitación:</strong> solicitar que se limite el tratamiento de tus datos.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, puedes escribir a <strong>rgpd@lmcareeradvisor.com</strong> indicando tu solicitud y acompañando copia de tu documento de identidad.
          </p>
          <p>
            Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que tus derechos no han sido atendidos correctamente: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Medidas de seguridad</h2>
          <p>
            Se aplican medidas técnicas y organizativas adecuadas para garantizar la seguridad, integridad y confidencialidad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
          </p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default PrivacyPage;
