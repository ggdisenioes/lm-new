import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  situation: string;
  difficulties?: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, situation, difficulties, source }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!name || !email || !situation) {
      console.error("Missing required fields:", { name: !!name, email: !!email, situation: !!situation });
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, and situation are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Input length validation
    if (name.length > 200 || email.length > 255 || situation.length > 5000 || 
        (difficulties && difficulties.length > 5000) || (source && source.length > 500)) {
      console.error("Input too long");
      return new Response(
        JSON.stringify({ error: "Input exceeds maximum allowed length" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Processing contact form submission from:", email);

    // Send notification email to the business owner
    const notificationEmail = await resend.emails.send({
      from: "LM Career Advisor <onboarding@resend.dev>",
      to: ["contacto@lmcareeradvisor.com"],
      subject: `Nueva consulta de ${name}`,
      html: `
        <h1>Nueva consulta de contacto</h1>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Situación actual:</strong></p>
        <p>${escapeHtml(situation).replace(/\n/g, '<br>')}</p>
        ${difficulties ? `
        <p><strong>Dificultades:</strong></p>
        <p>${escapeHtml(difficulties).replace(/\n/g, '<br>')}</p>
        ` : ''}
        ${source ? `<p><strong>Cómo me conoció:</strong> ${escapeHtml(source)}</p>` : ''}
      `,
    });

    if (notificationEmail.error) {
      console.error("Error sending notification email:", notificationEmail.error);
      throw new Error(notificationEmail.error.message);
    }

    console.log("Notification email sent successfully:", notificationEmail.data?.id);

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "LM Career Advisor <onboarding@resend.dev>",
      to: [email],
      subject: "Hemos recibido tu mensaje - LM Career Advisor",
      html: `
        <h1>¡Gracias por contactarnos, ${escapeHtml(name)}!</h1>
        <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
        <p>Mientras tanto, si tienes alguna pregunta urgente, puedes contactarnos por WhatsApp.</p>
        <br>
        <p>Un saludo,</p>
        <p><strong>Lucinda Martínez</strong><br>LM Career Advisor</p>
      `,
    });

    if (confirmationEmail.error) {
      console.error("Error sending confirmation email:", confirmationEmail.error);
      // Don't throw - notification was sent, just log the confirmation failure
    } else {
      console.log("Confirmation email sent successfully:", confirmationEmail.data?.id);
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Contact form submitted successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

serve(handler);
