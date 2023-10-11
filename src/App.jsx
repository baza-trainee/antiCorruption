import "./App.scss";
import "./styles/styles.scss";
import {
  Header,
  Footer,
  About,
  Contact,
  Counteract,
  Home,
  Partners,
  SliderContainer,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Home />
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
