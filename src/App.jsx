 
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  Outlet
} from 'react-router-dom'

 
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
  Error404
 
} from "./components";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

const Main = () => (
  <>
  <About />
  <Contact />
  <Counteract />
  <Home />
  <Partners />
  <SliderContainer />
  </>
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
