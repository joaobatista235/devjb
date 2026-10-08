import { SiteFooter } from "@/components/layout/SiteFooter/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader/SiteHeader";
import { Differentials } from "@/components/sections/Differentials/Differentials";
import { Faq } from "@/components/sections/Faq/Faq";
import { FinalCta } from "@/components/sections/FinalCta/FinalCta";
import { Hero } from "@/components/sections/Hero/Hero";
import { Investment } from "@/components/sections/Investment/Investment";
import { Process } from "@/components/sections/Process/Process";
import { Projects } from "@/components/sections/Projects/Projects";
import { Services } from "@/components/sections/Services/Services";
import { ValueProposition } from "@/components/sections/ValueProposition/ValueProposition";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader brand={site.brand} links={site.nav} cta={site.cta} />
      <main>
        <Hero {...site.hero} cta={site.cta} />
        <ValueProposition {...site.value} />
        <Services {...site.services} />
        <Process {...site.process} />
        <Projects {...site.projects} />
        <Differentials {...site.differentials} />
        <Investment {...site.investment} cta={site.cta} />
        <Faq {...site.faq} />
        <FinalCta {...site.finalCta} cta={site.cta} />
      </main>
      <SiteFooter brand={site.brand} links={site.nav} {...site.footer} />
    </>
  );
}
