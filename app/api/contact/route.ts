import { NextResponse } from "next/server";

import {
  deliverContactSubmission,
  validateContactSubmission,
} from "@/lib/forms/contact";

export async function POST(request: Request) {
  try {
    const validation = validateContactSubmission(await request.json());

    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: validation.message },
        { status: 400 },
      );
    }

    await deliverContactSubmission(validation.data);

    return NextResponse.json(
      { success: true, message: "Aanvraag ontvangen." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Fout bij verwerken contactaanvraag:", error);
    return NextResponse.json(
      { success: false, message: "Er is een fout opgetreden." },
      { status: 500 },
    );
  }
}
