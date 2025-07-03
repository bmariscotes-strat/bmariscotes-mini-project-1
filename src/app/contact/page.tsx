"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 rounded-xl border bg-white shadow">
      {status === "success" ? (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-green-700">Message Sent!</h2>
          <p className="text-muted-foreground">Thanks for reaching out — I’ll get back to you soon.</p>
          {/* Replace with your own GIF */}

          <Image
            src="/media/status/success.gif"
            alt="Success"
            className="mx-auto w-80 h-55 object-contain"
            width={914}
            height={650}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xgvyqyvk" method="POST" className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Your Email
            </label>
            <Input id="email" type="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Your Message
            </label>
            <Textarea id="message" name="message" placeholder="Say something..." rows={5} required />
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send
            </Button>

            {status === "error" && <p className="text-sm text-destructive">Something went wrong. Try again.</p>}
          </div>
        </form>
      )}
    </div>
  );
}
