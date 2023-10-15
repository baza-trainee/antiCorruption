import "./App.scss";
import "./styles/styles.scss";
import {
  Header,
  Footer,
  About,
  Contact,
  Counteract,
  Hero,
  Partners,
  SliderContainer,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <SliderContainer />
      <About />
      <Counteract />
      <Contact />
      <Partners />
      <Footer />
    </>
  );
};

export default App;
