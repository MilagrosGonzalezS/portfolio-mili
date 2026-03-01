"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="px-6 pb-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-card px-8 py-6 shadow-sm">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#" className="text-lg font-bold tracking-tight text-foreground">
            MG<span className="text-accent">.</span>
          </a>
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Milagros Gonzalez. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
