import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";

const DataProtectionPage = () => (
  <div className="pt-32 pb-20">
    <div className="container-custom max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Protección de Datos</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm">Última actualización: Mayo 2026</p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Compromiso con la protección de datos</h2>
          <p>
            Lucinda Martínez — LM Career Advisor se compromete a cumplir con la normativa vigente en materia de protección de datos personales, en particular el Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Información básica sobre protección de datos</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground align-top w-40">Responsable</td>
                  <td className="py-3">Lucinda Martínez — rgpd@lmcareeradvisor.com</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground align-top">Finalidad</td>
                  <td className="py-3">Responder a las consultas recibidas y gestionar la comunicación profesional solicitada.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground align-top">Legitimación</td>
                  <td className="py-3">Interés legítimo en responder a las solicitudes de información o contacto recibidas, así como la relación precontractual que pueda derivarse de la comunicación.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground align-top">Destinatarios</td>
                  <td className="py-3">No se cederán datos a terceros, salvo obligación legal.</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-semibold text-foreground align-top">Derechos</td>
                  <td className="py-3">Acceso, rectificación, supresión, oposición, limitación y portabilidad. Escribir a rgpd@lmcareeradvisor.com.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-foreground align-top">Info adicional</td>
                  <td className="py-3">Consulta la <Link to="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link> para más detalles.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Medidas de seguridad</h2>
          <p>
            Se aplican las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, incluyendo:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cifrado de las comunicaciones mediante protocolo HTTPS/SSL.</li>
            <li>Control de acceso restringido a los datos personales.</li>
            <li>Copias de seguridad periódicas.</li>
            <li>Actualización regular de los sistemas y aplicaciones.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Conservación de datos</h2>
          <p>
            Los datos personales se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados. Una vez finalizada la relación, los datos se conservarán bloqueados durante los plazos legales aplicables para atender posibles responsabilidades derivadas del tratamiento.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Ejercicio de derechos</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando un correo electrónico a <strong>rgpd@lmcareeradvisor.com</strong>, indicando el derecho que deseas ejercer y acompañando copia de tu documento de identidad.
          </p>
          <p>
            Si consideras que el tratamiento de tus datos no se ajusta a la normativa vigente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Modificaciones</h2>
          <p>
            Esta política puede ser actualizada en cualquier momento para adaptarla a cambios normativos o a nuevas prácticas de tratamiento. Cualquier modificación será publicada en esta página con la fecha de actualización correspondiente.
          </p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default DataProtectionPage;
