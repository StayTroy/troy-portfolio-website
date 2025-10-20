import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { BackgroundRippleEffectDemo } from '@/components/BackGroundEffect/BackGroundRippleEffectDemo';
import "@/components/ScrollToTop/styles/scrolllayout.css"

export function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    }, [location.pathname]);

    return (
        <div className="project-routes-wrapper">
            <BackgroundRippleEffectDemo />
            <Outlet />
        </div>
    );
}