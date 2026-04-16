export type Locale = "en" | "es" | "fr";

export const locales: Locale[] = ["en", "es", "fr"];
export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
};

type Dict = Record<string, string>;

export const dictionaries: Record<Locale, Dict> = {
  en: {
    "nav.services": "Services",
    "nav.results": "Results",
    "nav.process": "Process",
    "nav.pricing": "Pricing",
    "nav.portal": "Client Portal",
    "nav.login": "Sign in",
    "nav.cta": "Free Audit",
    "hero.eyebrow": "Premium AI automation for small business",
    "hero.title": "Ship revenue-grade automations in 14 days — not 14 weeks.",
    "hero.sub":
      "FlowForge AI builds done-for-you Zapier flows and custom GPT agents for restaurants, e-com stores and local service owners. Recurring retainers from $500/mo.",
    "hero.ctaPrimary": "Get my free 60s audit",
    "hero.ctaSecondary": "See live results",
    "sticky.audit": "Get Your Free Automation Audit",
    "cta.book": "Book strategy call",
  },
  es: {
    "nav.services": "Servicios",
    "nav.results": "Resultados",
    "nav.process": "Proceso",
    "nav.pricing": "Precios",
    "nav.portal": "Portal",
    "nav.login": "Acceder",
    "nav.cta": "Auditoría",
    "hero.eyebrow": "Automatización IA premium para pymes",
    "hero.title": "Automatizaciones que generan ingresos en 14 días.",
    "hero.sub":
      "FlowForge AI construye flujos Zapier y agentes GPT a medida para restaurantes, e-commerce y negocios locales. Desde 500 $/mes.",
    "hero.ctaPrimary": "Auditoría gratuita 60s",
    "hero.ctaSecondary": "Ver resultados",
    "sticky.audit": "Auditoría de automatización gratis",
    "cta.book": "Agenda una llamada",
  },
  fr: {
    "nav.services": "Services",
    "nav.results": "Résultats",
    "nav.process": "Processus",
    "nav.pricing": "Tarifs",
    "nav.portal": "Espace client",
    "nav.login": "Connexion",
    "nav.cta": "Audit gratuit",
    "hero.eyebrow": "Automatisation IA premium pour PME",
    "hero.title": "Automatisations qui génèrent du revenu en 14 jours.",
    "hero.sub":
      "FlowForge AI construit vos flux Zapier et agents GPT sur mesure pour restaurants, e-commerce et services locaux. À partir de 500 $/mois.",
    "hero.ctaPrimary": "Audit gratuit 60s",
    "hero.ctaSecondary": "Voir nos résultats",
    "sticky.audit": "Audit d'automatisation gratuit",
    "cta.book": "Réserver un appel",
  },
};

export function t(locale: Locale, key: string) {
  return dictionaries[locale]?.[key] ?? dictionaries.en[key] ?? key;
}
