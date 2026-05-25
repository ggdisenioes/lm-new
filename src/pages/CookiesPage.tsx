import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";

const CookiesPage = () => (
  <div className="pt-32 pb-20">
    <div className="container-custom max-w-3xl">
      <AnimatedSection>
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Política de Cookies</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm">Última actualización: Mayo 2026</p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, tablet o móvil) cuando los visitas. Sirven para recordar tus preferencias, mejorar tu experiencia de navegación y recopilar información analítica sobre el uso del sitio.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. ¿Qué tipos de cookies utilizamos?</h2>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Cookies técnicas (necesarias)</h3>
          <p>
            Son imprescindibles para el funcionamiento del sitio web. Permiten la navegación y el uso de las funciones básicas. No requieren consentimiento y no pueden desactivarse.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Cookies analíticas</h3>
          <p>
            Nos permiten medir y analizar el comportamiento de los usuarios del sitio con el fin de mejorar su contenido y funcionamiento. La información recogida es anónima y agregada.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. ¿Cómo gestionar las cookies?</h2>
          <p>
            Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminar las cookies almacenadas. A continuación te indicamos cómo hacerlo en los navegadores más habituales:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
          </ul>
          <p>
            Ten en cuenta que si desactivas las cookies, algunas funcionalidades del sitio podrían no estar disponibles.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Cookies de terceros</h2>
          <p>
            Este sitio web puede utilizar servicios de terceros que instalen cookies con fines analíticos. Estos terceros tienen sus propias políticas de privacidad y cookies, sobre las que no tenemos control.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Actualización de esta política</h2>
          <p>
            Esta política de cookies puede actualizarse periódicamente para reflejar cambios en las cookies utilizadas o por motivos legales. Te recomendamos consultarla regularmente.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Más información</h2>
          <p>
            Si tienes dudas sobre nuestra política de cookies, puedes escribirnos a <strong>rgpd@lmcareeradvisor.com</strong>.
          </p>
          <p>
            Consulta también nuestra <Link to="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link> y la página de <Link to="/proteccion-datos" className="text-primary hover:underline">Protección de Datos</Link>.
          </p>
        </div>
        <div className="mt-12">
          <Link to="/" className="text-primary hover:underline">← Volver al inicio</Link>
        </div>
      </AnimatedSection>
    </div>
  </div>
);

export default CookiesPage;
