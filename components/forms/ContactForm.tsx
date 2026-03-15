"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";

type FormValues = {
  company: string;
  email: string;
  message: string;
  name: string;
};

const initialValues: FormValues = {
  company: "",
  email: "",
  message: "",
  name: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<{
    message: string;
    tone: "idle" | "success" | "error";
  }>({ message: "", tone: "idle" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors((e) => ({ ...e, email: "Vul een geldig e-mailadres in" }));
    } else if (!value.trim()) {
      setErrors((e) => ({ ...e, [name]: "Dit veld is verplicht" }));
    } else {
      setErrors((e) => ({ ...e, [name]: undefined }));
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honeypot) return;
    if (Object.values(errors).some(Boolean)) return;
    setIsSubmitting(true);
    setStatus({ message: "", tone: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Er ging iets mis bij het verzenden.");
      }

      setValues(initialValues);
      setStatus({
        message: "Bedankt. We nemen meestal binnen één werkdag contact op.",
        tone: "success",
      });
    } catch (error) {
      setStatus({
        message:
          error instanceof Error
            ? error.message
            : "Er ging iets mis bij het verzenden.",
        tone: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="surface-card space-y-5 p-7 md:p-8"
      onSubmit={handleSubmit}
    >
      <input
        aria-hidden="true"
        autoComplete="off"
        name="website"
        onChange={(event) => setHoneypot(event.target.value)}
        style={{ position: "absolute", left: "-9999px" }}
        tabIndex={-1}
        type="text"
        value={honeypot}
      />
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-foreground">Naam</span>
          <input
            className="form-field"
            name="name"
            onBlur={(event) => validateField("name", event.target.value)}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Jouw naam"
            required
            value={values.name}
          />
          {errors.name && <p role="alert" className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-foreground">E-mail</span>
          <input
            className="form-field"
            name="email"
            onBlur={(event) => validateField("email", event.target.value)}
            onChange={(event) =>
              setValues((current) => ({ ...current, email: event.target.value }))
            }
            placeholder="naam@bedrijf.nl"
            required
            type="email"
            value={values.email}
          />
          {errors.email && <p role="alert" className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-foreground">Bedrijf</span>
        <input
          className="form-field"
          name="company"
          onChange={(event) =>
            setValues((current) => ({ ...current, company: event.target.value }))
          }
          placeholder="Bedrijfsnaam"
          value={values.company}
        />
      </label>

      <label className="space-y-2">
        <span className="text-sm font-medium text-foreground">
          Vertel kort wat je nodig hebt
        </span>
        <textarea
          className="form-field min-h-36 resize-y"
          name="message"
          onBlur={(event) => validateField("message", event.target.value)}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Bijvoorbeeld: nieuwe website, SEO-basis, onderhoud of een complete relaunch."
          required
          value={values.message}
        />
        {errors.message && <p role="alert" className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          aria-live="polite"
          className={
            status.tone === "error"
              ? "text-sm text-red-600"
              : status.tone === "success"
                ? "text-sm text-green-700"
                : "text-sm text-muted"
          }
        >
          {status.message || "Liever eerst bellen? Dat kan natuurlijk ook."}
        </p>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Verzenden..." : "Verstuur aanvraag"}
        </Button>
      </div>
    </form>
  );
}
