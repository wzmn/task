import Navbar from "./components/navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "./components/footer";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from './pages/home'
import MyAccount from './pages/my-account'
import Cart from './pages/cart'



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
    errorElement: (
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className="text-3xl font-bold mb-4">404</div>
        <Link to="/">Click here to go home</Link>
        <img src="./so-really.gif"/>
      </div>
    )
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: "/my-account",
    element: (
      <>
        <Navbar />
        <MyAccount />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
