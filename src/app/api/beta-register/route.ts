import { NextResponse } from "next/server";
import { z } from "zod";

const betaSchema = z.object({
  company: z.string().min(1, "Firma ist erforderlich"),
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Gültige E-Mail erforderlich"),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const data = betaSchema.parse(body);
    console.log("Beta-Registrierung:", data);
    // TODO: CRM / E-Mail-Service integrieren
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
