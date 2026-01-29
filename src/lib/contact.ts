/**
 * Contact details used across the site.
 *
 * TODO: Replace placeholders with real URLs/numbers.
 */

export const CONTACT = {
  /** WhatsApp international number without `+` or spaces (e.g. Spain: 34XXXXXXXXX). */
  WHATSAPP_NUMBER: "34600000000",

  /** LinkedIn public profile URL. */
  LINKEDIN_URL: "https://www.linkedin.com/in/tu-perfil",

  /** Public email (optional). */
  EMAIL: "contacto@lmcareeradvisor.com",

  /** Optional external calendar/booking URL (leave empty if not used). */
  CALENDAR_URL: "",
} as const;

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
