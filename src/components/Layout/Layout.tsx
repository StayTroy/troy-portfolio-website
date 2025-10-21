import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BackgroundRippleEffectDemo } from '@/components/BackGroundEffect/BackGroundRippleEffectDemo';
import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/NavagationBar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import "@/components/Layout/styles/layout.css"

export function Layout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    }, [location.pathname]);

    return (
        <div className="layout-container">
            <BackgroundRippleEffectDemo />
            <div className="content-wrapper">
                <NavBar />
                <main className="main-content">
                    <Outlet /> 
                </main>
                <Footer />
            </div>
        </div>
    );
}
