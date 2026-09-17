import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next["name"] = "Please enter your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) next["email"] = "Please enter a valid email.";
    if (!String(data.get("phone") ?? "").trim()) next["phone"] = "Please enter your phone number.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }
  if (sent) return <div role="status" className="flex min-h-64 flex-col items-center justify-center border border-primary bg-primary/10 p-8 text-center"><CheckCircle2 className="mb-4 size-12 text-primary"/><h3 className="display text-3xl">Thank you!</h3><p className="mt-3 max-w-sm text-muted-foreground">Your request has been received. Our team will be in touch.</p></div>;
  return <form onSubmit={submit} noValidate className={compact ? "grid gap-3" : "grid gap-5"}>
    <div className="grid gap-2"><Label htmlFor={`name-${compact}`}>Name</Label><Input id={`name-${compact}`} name="name" placeholder="Your name" aria-invalid={!!errors["name"]} className="h-12 bg-background"/>{errors["name"] && <p className="text-sm text-destructive">{errors["name"]}</p>}</div>
    <div className="grid gap-2"><Label htmlFor={`email-${compact}`}>Email</Label><Input id={`email-${compact}`} name="email" type="email" placeholder="you@company.com" aria-invalid={!!errors["email"]} className="h-12 bg-background"/>{errors["email"] && <p className="text-sm text-destructive">{errors["email"]}</p>}</div>
    <div className="grid gap-2"><Label htmlFor={`phone-${compact}`}>Phone</Label><Input id={`phone-${compact}`} name="phone" type="tel" placeholder="Phone number" aria-invalid={!!errors["phone"]} className="h-12 bg-background"/>{errors["phone"] && <p className="text-sm text-destructive">{errors["phone"]}</p>}</div>
    {!compact && <div className="grid gap-2"><Label htmlFor="message">What would you like to grow?</Label><Textarea id="message" name="message" rows={4} placeholder="Tell us about your goals" className="bg-background"/></div>}
    <Button type="submit" size="lg" className="h-14 rounded-none text-base font-black uppercase">Claim your free strategy session <ArrowRight/></Button>
  </form>;
}
