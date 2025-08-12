import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contactus from "./pages/contactus";
import Aboutus from "./pages/aboutus";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";

function App() {
  const [count, setCount] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/aboutus",
      element: <Aboutus />,
    },
    {
      path: "/contactus",
      element: <Contactus />,
    },
  ]);
  return (
    <div>
        <Navbar />
      <div className="relative">
        <RouterProvider router={router} />
        <Footer />
        {showTopBtn && (
          <div
            onClick={scrollToTop}
            className="fixed right-10 bottom-50 cursor-pointer !grid items-center transform -rotate-90 origin-bottom-right group z-50"
          >
            <span className="text-xs text-[#194365] tracking-widest font-medium uppercase mb-2">
              <span className="w-14 h-0.5 bg-[#fff] transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
              Back to Top
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
