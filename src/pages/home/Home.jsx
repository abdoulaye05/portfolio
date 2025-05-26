// src/pages/home/HomePage.jsx
import Header         from "../../components/Header";
import Footer         from "../../components/Footer";
import Landing        from "../../components/Landing";
import About          from "../../components/About";
import WorksSection   from "../../components/WorksSection";
import Contact        from "../../components/Contact";
import Skills         from "../../components/Skills";

export default function HomePage() {
    return (
        <>
            <Header />
            <Landing />
            <About />
            <WorksSection />
            <Contact />
            <Footer />
        </>
    );
}