import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  Outlet
} from 'react-router-dom'

import './styles/styles.scss';

import {
  Header,
  Footer,
  CounteractContainer,
  Hero,
  CorruptionContainer,
  Error
} from './components';


const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

const Main = () => (
  <>
       {/* <Header />
        <Hero /> */}
      <CorruptionContainer />
      <CounteractContainer />
      {/* <Footer /> */}
  </>
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
