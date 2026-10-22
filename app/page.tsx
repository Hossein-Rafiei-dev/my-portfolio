
import Hero from "./componet/Home/Hero";
import Project from "./componet/Home/Project/Project";
import About from "./componet/About";
import Skils from "./componet/Skils";
import Contact from "./componet/Contact";
import Reveal from "./componet/Reveal";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Projects */}
      <Reveal>
        <Project />
      </Reveal>

      {/* About */}
      <Reveal>
        <About />
      </Reveal>

      {/* Skills */}
      <Reveal>
        <Skils />
      </Reveal>

      {/* Contact */}
        <Contact />
    </div>
  );
}
