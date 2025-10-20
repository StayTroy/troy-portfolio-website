import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from "@/components/Layout/Layout";
import { ScrollToTop } from "./components/ScrollToTop/ScrollTop";
import { DarkModeContext } from "@/components/DarkModeContext/DarkModeContext";
import { HomeRoute } from '@/routes/Home'
import { ProjectsRoute } from '@/routes/Projects'
import { VehicleDamageLoggerRoute } from '@/routes/ProjectRoutes/VehicleLogger'
import { BiteBookRoute } from '@/routes/ProjectRoutes/BiteBook'
import { SpartanHeroRoute } from '@/routes/ProjectRoutes/SpartanHero'
import { HobbiesRoute } from '@/routes/Hobbies'
import { ContactRoute } from '@/routes/Contact'
import '@/App.css'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
          { path: "/", element: <HomeRoute /> },
          { path: "/projects", element: <ProjectsRoute /> },
          { path: "/hobbies", element: <HobbiesRoute /> },
          { path: "/contact", element: <ContactRoute /> },
        ],
    },
    {
        element: <ScrollToTop />,
        children: [
          { path: "/projects/vehicle-damage-logger", element: <VehicleDamageLoggerRoute /> },
          { path: "/projects/bite-book", element: <BiteBookRoute /> },
          { path: "/projects/spartan-hero", element: <SpartanHeroRoute /> },
        ],
    },
]);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (  
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <RouterProvider router={router} />
      </DarkModeContext.Provider>
    </>
  )
}

export default App
