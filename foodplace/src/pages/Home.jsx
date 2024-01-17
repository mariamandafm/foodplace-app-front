import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Footer />
    </>
  );
}
