"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          MG<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.7 }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </motion.a>
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background px-6 md:hidden"
          >
            <nav className="flex flex-col gap-1 pb-6 pt-3" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="rounded-xl px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:milagrosgonzalez.sa@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="mt-3 rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground"
              >
                {t("nav.cta")}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
