"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.work": "Work",
    "nav.tools": "Tools",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",

    // Hero
    "hero.tag": "Web Developer",
    "hero.location": "Based in Buenos Aires, working worldwide",
    "hero.description":
      "I design and build beautiful, functional websites for brands across every industry — from code-based solutions to no-code platforms.",
    "hero.viewWork": "View My Work",
    "hero.getInTouch": "Get in Touch",
    "hero.scroll": "Scroll",

    // About
    "about.tag": "About",
    "about.title": "Creating digital experiences that leave a mark",
    "about.p1":
      "I'm Milagros Gonzalez, a web developer based in Buenos Aires, Argentina. I'm passionate about turning ideas into stunning, high-performing websites. Whether it's a custom-coded solution with Next.js or a beautifully crafted site on WordPress, Wix, or Squarespace — I tailor every project to fit the brand's unique needs.",
    "about.p2":
      "From corporate sites to wedding pages, sports brands to artistic portfolios — I've worked across diverse industries, delivering designs that are both beautiful and functional. I work with clients from all over the world.",
    "about.highlight1.title": "Code-First",
    "about.highlight1.desc":
      "Building custom, performant websites with Next.js and modern web technologies.",
    "about.highlight2.title": "No-Code Platforms",
    "about.highlight2.desc":
      "Crafting polished experiences on WordPress, Wix, and Squarespace.",
    "about.highlight3.title": "Design-Driven",
    "about.highlight3.desc":
      "Every project starts with a focus on aesthetics, usability, and brand identity.",

    // Projects
    "projects.tag": "Selected Work",
    "projects.title": "Projects across industries",
    "projects.description":
      "A curated selection of websites I've built for clients in diverse fields — each one crafted with care and attention to detail.",
    "projects.all": "All",
    "projects.corporate": "Corporate",
    "projects.sports": "Sports",
    "projects.health": "Health",
    "projects.artistic": "Artistic",
    "projects.weddings": "Weddings",
    "projects.entrepreneur": "Entrepreneur",
    "projects.showing": "Showing",
    "projects.of": "of",
    "projects.projectsLabel": "projects",

    // Tools
    "tools.tag": "Tools & Platforms",
    "tools.title": "The right tool for every project",
    "tools.description":
      "I work across code and no-code platforms, picking the best technology to match each client's goals and budget.",
    "tools.nextjs.desc":
      "React framework for production-grade web applications",
    "tools.wordpress.desc":
      "The world's most popular CMS for flexible, scalable sites",
    "tools.wix.desc": "Visual website builder for fast, drag-and-drop creation",
    "tools.squarespace.desc":
      "All-in-one platform for stunning, template-based websites",
    "tools.shopify.desc":
      "Leading e-commerce platform for online stores of any size",
    "tools.tiendanube.desc":
      "Latin America's top e-commerce platform for growing brands",
    "tools.code": "Code",
    "tools.cms": "CMS",
    "tools.nocode": "No-Code",
    "tools.ecommerce": "E-commerce",
    "tools.stat1.number": "25+",
    "tools.stat1.label": "Projects Delivered",
    "tools.stat2.number": "6",
    "tools.stat2.label": "Industries Served",
    "tools.stat3.number": "6+",
    "tools.stat3.label": "Platforms Mastered",
    "tools.stat4.number": "100%",
    "tools.stat4.label": "Client Satisfaction",

    // Contact
    "contact.tag": "Contact",
    "contact.title": "Let's build something amazing together",
    "contact.description":
      "Have a project in mind? I'd love to hear about it. Reach out and let's discuss how I can bring your vision to life.",
    "contact.location": "Buenos Aires, Argentina — Available worldwide",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.work": "Trabajos",
    "nav.tools": "Herramientas",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",

    // Hero
    "hero.tag": "Desarrolladora Web",
    "hero.location": "Desde Buenos Aires, trabajando para todo el mundo",
    "hero.description":
      "Diseno y construyo sitios web atractivosy funcionales para marcas de diferentes rubros — desde soluciones con código hasta plataformas no-code.",
    "hero.viewWork": "Ver Mis Trabajos",
    "hero.getInTouch": "Contactame",
    "hero.scroll": "Explorar",

    // About
    "about.tag": "Sobre Mí",
    "about.title": "Creando experiencias digitales que dejan huella",
    "about.p1":
      "Soy Milagros Gonzalez, desarrolladora web con base en Buenos Aires, Argentina. Me apasiona transformar ideas en sitios web atractivos y de alto rendimiento. Ya sea una solución con código en Next.js o un sitio cuidadosamente diseñado en WordPress, Wix o Squarespace, adapto cada proyecto a las necesidades únicas de la marca.",
    "about.p2":
      "Desde sitios corporativos hasta páginas de bodas, marcas deportivas y portfolios artísticos — trabajé en diversas industrias, entregando diseños que son tanto modernos como funcionales. Trabajo con clientes de todo el mundo.",
    "about.highlight1.title": "Código",
    "about.highlight1.desc":
      "Construyendo sitios web personalizados y de alto rendimiento con Next.js y tecnologías web modernas.",
    "about.highlight2.title": "Plataformas No-Code",
    "about.highlight2.desc":
      "Creando experiencias pulidas en WordPress, Wix y Squarespace.",
    "about.highlight3.title": "Diseño",
    "about.highlight3.desc":
      "Cada proyecto comienza con un enfoque en estética, usabilidad e identidad de marca.",

    // Projects
    "projects.tag": "Trabajos Seleccionados",
    "projects.title": "Proyectos en diferentes rubros",
    "projects.description":
      "Una selección de sitios web que construí para clientes en diferentes rubros — cada uno hecho con cuidado y atención al detalle.",
    "projects.all": "Todos",
    "projects.corporate": "Corporativo",
    "projects.sports": "Deportes",
    "projects.health": "Salud",
    "projects.artistic": "Artístico",
    "projects.weddings": "Casamientos",
    "projects.entrepreneur": "Emprendimientos",
    "projects.showing": "Mostrando",
    "projects.of": "de",
    "projects.projectsLabel": "proyectos",

    // Tools
    "tools.tag": "Herramientas y Plataformas",
    "tools.title": "La herramienta correcta para cada proyecto",
    "tools.description":
      "Trabajo con plataformas de código y no-code, eligiendo la mejor tecnología para los objetivos y presupuesto de cada cliente.",
    "tools.nextjs.desc":
      "Framework de React para aplicaciones web de nivel profesional",
    "tools.wordpress.desc":
      "El CMS más popular del mundo para sitios flexibles y escalables",
    "tools.wix.desc":
      "Constructor visual de sitios web con creación drag-and-drop",
    "tools.squarespace.desc":
      "Plataforma todo-en-uno para sitios web con templates elegantes",
    "tools.shopify.desc":
      "Plataforma líder de e-commerce para tiendas online de cualquier tamaño",
    "tools.tiendanube.desc":
      "La plataforma de e-commerce más grande de Latinoamérica para marcas en crecimiento",
    "tools.code": "Código",
    "tools.cms": "CMS",
    "tools.nocode": "No-Code",
    "tools.ecommerce": "E-commerce",
    "tools.stat1.number": "25+",
    "tools.stat1.label": "Proyectos Entregados",
    "tools.stat2.number": "6",
    "tools.stat2.label": "Rubros Abarcados",
    "tools.stat3.number": "6+",
    "tools.stat3.label": "Plataformas Dominadas",
    "tools.stat4.number": "100%",
    "tools.stat4.label": "Satisfacción del Cliente",

    // Contact
    "contact.tag": "Contacto",
    "contact.title": "Construyamos algo increíble juntos",
    "contact.description":
      "¿Tenés un proyecto en mente? Me encantaría escucharlo. Escribime y charlemos sobre cómo puedo dar vida a tu visión.",
    "contact.location":
      "Buenos Aires, Argentina — Disponible para todo el mundo",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[lang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
