"use client"

import { useLanguage } from "@/lib/language-context"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 pb-8"
    >
      <div className="mx-auto max-w-7xl rounded-3xl bg-card px-8 py-6 shadow-sm">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#" className="text-lg font-bold tracking-tight text-foreground">
            MG<span className="text-accent">.</span>
          </a>
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Milagros Gonzalez. {t("footer.rights")}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
