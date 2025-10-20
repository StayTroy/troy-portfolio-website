import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BackgroundRippleEffectDemo } from '@/components/BackGroundEffect/BackGroundRippleEffectDemo';
import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/NavagationBar/NavBar";
import { Footer } from "@/components/Footer/Footer";

export function Layout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
        top: 0,
        behavior: "smooth", 
        });
    }, [location.pathname]);

    return (
        <>
            <BackgroundRippleEffectDemo />
            <NavBar />
            <Outlet /> 
            <Footer />
        </>
  );
}
