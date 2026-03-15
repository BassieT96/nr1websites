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
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("Nieuwe contactaanvraag ontvangen:", data);
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Webhook kon de aanvraag niet verwerken.");
  }
}
