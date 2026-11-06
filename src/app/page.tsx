import Hero from "@/components/home/Hero";
import Theme from "@/components/Theme";
import About from "@/components/about";
import Reveal from "@/components/Reveal";

const Home = () => {
  return (
    <>
      <Hero />
      <Reveal tilt={false}>
        <About />
      </Reveal>
      <Reveal tilt={false}>
        <Theme />
      </Reveal>
    </>
  );
};

export default Home;
