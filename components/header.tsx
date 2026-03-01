"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.work"), href: "#work" },
    { label: t("nav.tools"), href: "#tools" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          MG<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 rounded-full bg-secondary px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label={lang === "en" ? "Cambiar a Espanol" : "Switch to English"}
          >
            <span className={lang === "en" ? "text-foreground font-semibold" : ""}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === "es" ? "text-foreground font-semibold" : ""}>ES</span>
          </button>

          <a
            href="mailto:milagrosgonzalez.sa@gmail.com"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-all hover:brightness-95"
          >
            {t("nav.cta")}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground"
            aria-label={lang === "en" ? "Cambiar a Espanol" : "Switch to English"}
          >
            <span className={lang === "en" ? "text-foreground font-semibold" : ""}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === "es" ? "text-foreground font-semibold" : ""}>ES</span>
          </button>

          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:milagrosgonzalez.sa@gmail.com"
              className="mt-3 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
            >
              {t("nav.cta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
