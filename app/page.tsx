import { ArrowRight, Zap, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">KP</span>
          <div className="flex items-center gap-6">
            <Link href="#portfolio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Munkáim
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Árak
            </Link>
            <Link
              href="#contact"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Kapcsolat
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Landing Page Fejlesztő
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-balance">Modern landing oldalak.</span>
            <br />
            <span className="text-primary">7 nap alatt.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Segítek magyar kisvállalkozásoknak olyan weboldalakat készíteni, amik valóban hoznak ügyfeleket. Gyorsan, modern technológiával, garanciával.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ingyenes konzultáció
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Munkáim megtekintése
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Portfólió</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Korábbi munkáim</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Project Card 1 */}
            <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/project-1.jpg"
                  alt="Pékség Kft. landing page"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Pékség Kft.</h3>
                <p className="mb-4 text-muted-foreground">
                  Modern landing oldal egy budapesti pékségnek. A projekt célja az online rendelések növelése volt, amit 3 hét alatt 40%-kal sikerült elérni.
                </p>
                <Link
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Megtekintés
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/project-2.jpg"
                  alt="Dental Smile landing page"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Dental Smile Fogászat</h3>
                <p className="mb-4 text-muted-foreground">
                  Konverzióra optimalizált weboldal egy debreceni fogászatnak. Az online időpontfoglalások száma megduplázódott az új oldal bevezetése után.
                </p>
                <Link
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Megtekintés
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="border-y border-border bg-card/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Miért engem válassz?</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Amit garantálok</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Gyors szállítás</h3>
              <p className="text-muted-foreground">
                7 napon belül kész az oldalad. Nem kell heteket-hónapokat várnod, hogy elinduljon a vállalkozásod online.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Modern technológia</h3>
              <p className="text-muted-foreground">
                Next.js, React és Tailwind CSS. Villámgyors oldalak, amik minden eszközön tökéletesen működnek.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Pénzvisszafizetési garancia</h3>
              <p className="text-muted-foreground">
                Ha nem vagy 100% elégedett az eredménnyel, visszaadom a teljes összeget. Kockázatmentesen dolgozhatsz velem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Árazás</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Átlátható árak</h2>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 md:p-12">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">Landing oldal</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold tracking-tight">250.000</span>
                <span className="text-xl text-muted-foreground">Ft-tól</span>
              </div>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Egyedi, reszponzív design</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">SEO alapbeállítások</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">Kapcsolati űrlap</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">7 napos szállítás</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-muted-foreground">30 nap ingyenes support</span>
              </li>
            </ul>

            <p className="text-center text-sm text-muted-foreground">
              Az ár a projekt komplexitásától függően változhat. Kérj egyedi árajánlatot!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border bg-card/50 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Kapcsolat</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Beszéljünk a projektedről</h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Foglalj egy ingyenes, 30 perces konzultációt, ahol megbeszéljük az igényeidet és adok egy személyre szabott árajánlatot.
          </p>
          <Link
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Időpont foglalása
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-muted-foreground">
            © 2026 Kovács Péter. Minden jog fenntartva.
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="mailto:hello@example.com"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              hello@kovacsdev.hu
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
