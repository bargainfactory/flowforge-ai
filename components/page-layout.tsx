import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-28">{children}</main>
      <Footer />
      <StickyCTA />
    </>
  );
}
