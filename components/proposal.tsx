"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  Instagram,
  Megaphone,
  Search,
  Clapperboard,
  Camera,
  Scissors,
  Share2,
  Globe,
  Database,
  Landmark,
  HardHat,
  Building2,
  MapPin,
  BadgeCheck,
  AlertCircle,
} from "lucide-react";
import c from "@/content.json";

const ACCENT = "#7765E3";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function Stagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

function Card({ children, className = "", highlight = false }: { children: React.ReactNode; className?: string; highlight?: boolean }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, boxShadow: `0 12px 40px -12px ${ACCENT}66` }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`rounded-[0.75rem] border p-6 ${highlight ? "border-[#7765E3] bg-[#7765E3]/10" : "border-[#333] bg-[#242424]"} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <motion.div variants={item} className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#7765E3]">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-[#a3a3a3]">{lead}</p>}
    </motion.div>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl scroll-mt-24 px-6 py-24 ${className}`}>
      <Stagger>{children}</Stagger>
    </section>
  );
}

const pillarIcons = [Landmark, HardHat, Building2, MapPin, BadgeCheck];
const stepIcons = [Clapperboard, Camera, Scissors, Share2];

export default function Proposal() {
  return (
    <main className="overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#333] bg-[#1C1C1C]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" aria-label="Shift Agency">
            <img src="/shift-logo.svg" alt="Shift Agency" className="h-8 w-auto" />
          </a>
          <ul className="hidden gap-7 text-sm text-[#a3a3a3] lg:flex">
            {c.nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="group relative transition-colors hover:text-white">
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#7765E3] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <span className="text-xs text-[#a3a3a3]">{c.meta.date}</span>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pt-28 pb-16">
        <div className="pointer-events-none absolute -top-20 right-0 h-[480px] w-[480px] rounded-full bg-[#7765E3]/20 blur-[120px]" />
        <Stagger className="relative">
          <motion.p variants={item} className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#7765E3]">
            {c.hero.eyebrow}
          </motion.p>
          <motion.h1 variants={item} className="max-w-4xl text-4xl font-bold leading-[1.08] md:text-6xl">
            {c.hero.title}
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-relaxed text-[#a3a3a3]">
            {c.hero.subtitle}
          </motion.p>
          <motion.a
            variants={item}
            href="#intro"
            whileHover={{ scale: 1.04, boxShadow: `0 0 32px ${ACCENT}88` }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-[0.75rem] bg-[#7765E3] px-6 py-3 font-semibold"
          >
            {c.hero.cta} <ArrowRight size={18} />
          </motion.a>
          <motion.div variants={item} className="mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
            {c.hero.stats.map((s) => (
              <div key={s.value} className="border-l-2 border-[#7765E3] py-1 pl-4">
                <p className="text-xl font-semibold">{s.value}</p>
                <p className="mt-1 text-sm text-[#a3a3a3]">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </Stagger>
      </section>

      {/* Intro */}
      <Section id="intro">
        <SectionHead eyebrow={c.intro.eyebrow} title={c.intro.title} lead={c.intro.lead} />
        <div className="grid gap-5 md:grid-cols-2">
          {c.intro.goals.map((g, i) => (
            <Card key={g.title}>
              <p className="mb-3 text-sm font-semibold text-[#7765E3]">0{i + 1}</p>
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-[#a3a3a3]">{g.text}</p>
            </Card>
          ))}
        </div>
        <motion.h3 variants={item} className="mt-16 mb-6 text-2xl font-semibold">
          {c.intro.findingsTitle}
        </motion.h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {c.intro.findings.map((f) => (
            <Card key={f.title} className="!p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 shrink-0 text-[#7765E3]" size={20} />
                <div>
                  <h4 className="font-semibold">{f.title}</h4>
                  <p className="mt-1 text-sm text-[#a3a3a3]">{f.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Strategy */}
      <Section id="estrategia">
        <SectionHead eyebrow={c.strategy.eyebrow} title={c.strategy.title} lead={c.strategy.lead} />
        <div className="grid gap-5 md:grid-cols-2">
          {c.strategy.phases.map((p, i) => (
            <Card key={p.title} highlight={i === 0}>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#7765E3] px-3 py-1 text-xs font-semibold">{p.tag}</span>
                <span className="text-sm text-[#a3a3a3]">{p.period}</span>
              </div>
              <h3 className="mt-5 text-3xl font-bold">{p.title}</h3>
              <p className="mt-2 text-[#a3a3a3]">{p.text}</p>
              <ul className="mt-6 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-[#7765E3]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <motion.p variants={item} className="mt-6 text-sm text-[#a3a3a3]">{c.strategy.note}</motion.p>
      </Section>

      {/* Content strategy */}
      <Section id="contenido">
        <SectionHead eyebrow={c.content.eyebrow} title={c.content.title} lead={c.content.lead} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {c.content.pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <Card key={p.title} className="!p-5">
                <Icon className="text-[#7765E3]" size={24} />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[#a3a3a3]">{p.text}</p>
              </Card>
            );
          })}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold">{c.content.channelsTitle}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.content.channels.map((ch) => (
                <span key={ch} className="rounded-full border border-[#333] px-3 py-1.5 text-sm">{ch}</span>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">{c.content.designTitle}</h3>
            <ul className="mt-5 space-y-2.5">
              {c.content.design.map((d) => (
                <li key={d} className="flex gap-3 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#7765E3]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#a3a3a3]">{c.content.designNote}</p>
          </Card>
        </div>
      </Section>

      {/* Ads */}
      <Section id="pauta">
        <SectionHead eyebrow={c.ads.eyebrow} title={c.ads.title} lead={c.ads.lead} />
        <div className="grid gap-5 md:grid-cols-2">
          {c.ads.platforms.map((p, i) => {
            const Icon = i === 0 ? Megaphone : Search;
            return (
              <Card key={p.name}>
                <div className="flex items-center gap-3">
                  <Icon className="text-[#7765E3]" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="text-sm text-[#a3a3a3]">{p.sub}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7765E3]">Fase 1 · Awareness</p>
                    <p className="mt-1 text-sm">{p.phase1}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7765E3]">Fase 2 · Ventas</p>
                    <p className="mt-1 text-sm">{p.phase2}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <Card className="mt-5">
          <h3 className="text-lg font-semibold">Medición instalada desde el día uno</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {c.ads.tracking.map((t) => (
              <div key={t} className="flex gap-3 text-sm">
                <Check size={16} className="mt-0.5 shrink-0 text-[#7765E3]" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </Card>
        <motion.p variants={item} className="mt-5 rounded-[0.75rem] border border-[#7765E3]/50 bg-[#7765E3]/10 px-5 py-4 text-sm">
          {c.ads.disclaimer}
        </motion.p>
      </Section>

      {/* Production */}
      <Section id="produccion">
        <SectionHead eyebrow={c.production.eyebrow} title={c.production.title} lead={c.production.lead} />
        <div className="grid gap-4 md:grid-cols-4">
          {c.production.steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <Card key={s.title} className="!p-5">
                <Icon className="text-[#7765E3]" size={24} />
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[#a3a3a3]">{s.text}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Card>
            <div className="flex items-center gap-3">
              <Globe className="text-[#7765E3]" size={24} />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7765E3]">{c.web.eyebrow}</p>
              <span className="ml-auto rounded-full bg-[#7765E3] px-3 py-1 text-xs font-semibold">Bonificado</span>
            </div>
            <h3 className="mt-4 text-2xl font-bold">{c.web.title}</h3>
            <p className="mt-2 text-sm text-[#a3a3a3]">{c.web.lead}</p>
            <ul className="mt-5 space-y-2.5">
              {c.web.items.map((w) => (
                <li key={w} className="flex gap-3 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#7765E3]" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Database className="text-[#7765E3]" size={24} />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7765E3]">{c.crm.eyebrow}</p>
            </div>
            <h3 className="mt-4 text-2xl font-bold">{c.crm.title}</h3>
            <p className="mt-2 text-sm text-[#a3a3a3]">{c.crm.lead}</p>
            <ul className="mt-5 space-y-2.5">
              {c.crm.items.map((w) => (
                <li key={w} className="flex gap-3 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#7765E3]" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[#a3a3a3]">{c.crm.note}</p>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section id="proceso">
        <SectionHead eyebrow={c.process.eyebrow} title={c.process.title} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.process.steps.map((s, i) => (
            <motion.div key={s.title} variants={item} className="flex gap-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 14, delay: i * 0.08 }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7765E3] text-lg font-bold shadow-[0_0_24px_#7765E366]"
              >
                {i + 1}
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-[#a3a3a3]">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="inversion">
        <SectionHead eyebrow={c.pricing.eyebrow} title={c.pricing.title} lead={c.pricing.lead} />
        <div className="grid gap-5 md:grid-cols-2">
          {c.pricing.plans.map((p) => (
            <Card key={p.name} highlight={p.featured} className="relative !p-8">
              {p.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-[#7765E3] px-3 py-1 text-xs font-semibold">{p.badge}</span>
              )}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-[#a3a3a3]">{p.tagline}</p>
              <p className="mt-6 text-4xl font-bold">{p.price}</p>
              <p className="text-sm text-[#a3a3a3]">{p.period}</p>
              <ul className="mt-6 space-y-3 border-t border-[#333] pt-6">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#7765E3]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {c.pricing.extras.map((e) => (
            <Card key={e.name} className="flex items-center justify-between !p-5">
              <span className="font-semibold">{e.name}</span>
              <span className="text-[#7765E3] font-semibold">{e.price}</span>
            </Card>
          ))}
        </div>
        <motion.ul variants={item} className="mt-8 space-y-2 text-sm text-[#a3a3a3]">
          {c.pricing.disclaimers.map((d) => (
            <li key={d}>* {d}</li>
          ))}
        </motion.ul>
      </Section>

      {/* Closing */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Stagger>
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-[0.75rem] border border-[#7765E3]/60 bg-[#242424] p-10 md:p-16"
          >
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#7765E3]/25 blur-[100px]" />
            <h2 className="relative max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{c.closing.title}</h2>
            <p className="relative mt-5 max-w-2xl text-lg text-[#a3a3a3]">{c.closing.text}</p>
            <div className="relative mt-10 flex flex-wrap gap-3">
              <motion.a whileHover={{ scale: 1.04, boxShadow: `0 0 32px ${ACCENT}88` }} href={`https://wa.me/54911${c.closing.phone.replace(/\D/g, "").slice(2)}`} className="inline-flex items-center gap-2 rounded-[0.75rem] bg-[#7765E3] px-5 py-3 font-semibold">
                <Phone size={18} /> {c.closing.phone}
              </motion.a>
              <motion.a whileHover={{ scale: 1.04 }} href={`mailto:${c.closing.email}`} className="inline-flex items-center gap-2 rounded-[0.75rem] border border-[#333] px-5 py-3">
                <Mail size={18} /> {c.closing.email}
              </motion.a>
              <motion.a whileHover={{ scale: 1.04 }} href="https://www.instagram.com/_shift.agency/" className="inline-flex items-center gap-2 rounded-[0.75rem] border border-[#333] px-5 py-3">
                <Instagram size={18} /> {c.closing.instagram}
              </motion.a>
            </div>
            <p className="relative mt-10 text-sm text-[#a3a3a3]">
              {c.closing.contactName} · {c.closing.contactRole}
            </p>
          </motion.div>
        </Stagger>
        <footer className="mt-10 flex items-center justify-between text-xs text-[#a3a3a3]">
          <img src="/shift-logo.svg" alt="Shift Agency" className="h-6 w-auto opacity-70" />
          <span>Propuesta confidencial para {c.meta.client} · {c.meta.date}</span>
        </footer>
      </section>
    </main>
  );
}
