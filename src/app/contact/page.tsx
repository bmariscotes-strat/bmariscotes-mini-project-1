"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

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
    <section className="pt-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <section className="flex flex-col items-start sm:items-center p-6 rounded-xl border bg-white shadow space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-left sm:text-center">Contact</h1>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-primary" /> bm.mariscotes@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-primary" /> 0976-336-3224
            </p>
            <p className="flex items-center gap-2">
              <Linkedin size={18} className="text-primary" />
              <a
                href="https://linkedin.com/in/biellamariscotes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/biellamariscotes
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Github size={18} className="text-primary" />
              <a
                href="https://github.com/biellamariscotes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/biellamariscotes
              </a>
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="p-6 rounded-xl border bg-gray-50 shadow">
          {status === "success" ? (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-green-700">Message Sent!</h2>
              <p className="text-muted-foreground">Thanks for reaching out — I will get back to you soon.</p>
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
              <h1 className="text-2xl font-bold">Leave a message!</h1>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="bg-white"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="bg-white"
                  placeholder="Say something..."
                  rows={5}
                  required
                />
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
        </section>
      </div>
    </section>
  );
}
