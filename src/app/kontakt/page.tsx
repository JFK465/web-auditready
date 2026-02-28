"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte gültige E-Mail-Adresse eingeben"),
  company: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 md:py-20">
      <div className="container-custom max-w-4xl">
        <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="heading-hero mb-4">Kontakt</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Demo anfragen, Beratungsgespräch buchen oder direkt schreiben. Wir
              antworten innerhalb von 24 Stunden.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-Mail</h3>
                  <p className="text-muted-foreground text-sm">
                    hallo@auditready.de
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Antwortzeit</h3>
                  <p className="text-muted-foreground text-sm">
                    Werktags innerhalb von 24 Stunden
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Nachricht erhalten!
                </h2>
                <p className="text-muted-foreground">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" {...register("name")} className="mt-1.5" />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="mt-1.5"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="mt-1.5"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {loading ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="/datenschutz" className="underline">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
