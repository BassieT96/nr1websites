import { Resend } from "resend";

export type ContactSubmission = {
  company?: string;
  email: string;
  message: string;
  name: string;
};

export function validateContactSubmission(input: unknown) {
  if (!input || typeof input !== "object") {
    return {
      success: false as const,
      message: "Ongeldige aanvraag.",
    };
  }

  const payload = input as Partial<ContactSubmission>;

  const normalized = {
    company: typeof payload.company === "string" ? payload.company.trim() : "",
    email: typeof payload.email === "string" ? payload.email.trim() : "",
    message: typeof payload.message === "string" ? payload.message.trim() : "",
    name: typeof payload.name === "string" ? payload.name.trim() : "",
  };

  if (!normalized.name || !normalized.email || !normalized.message) {
    return {
      success: false as const,
      message: "Vul minimaal naam, e-mail en bericht in.",
    };
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email);

  if (!isValidEmail) {
    return {
      success: false as const,
      message: "Vul een geldig e-mailadres in.",
    };
  }

  return {
    success: true as const,
    data: normalized,
  };
}

export async function deliverContactSubmission(data: ContactSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !toEmail) {
    console.log("Nieuwe contactaanvraag ontvangen (geen Resend config):", data);
    return;
  }

  const resend = new Resend(apiKey);

  const companyLine = data.company ? `\nBedrijf: ${data.company}` : "";

  await resend.emails.send({
    from: "nr1websites <noreply@nr1websites.nl>",
    to: toEmail,
    replyTo: data.email,
    subject: `Nieuwe aanvraag van ${data.name}`,
    text: `Naam: ${data.name}${companyLine}\nE-mail: ${data.email}\n\nBericht:\n${data.message}`,
  });
}
