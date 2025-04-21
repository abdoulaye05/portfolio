import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Landing from "../../components/Landing";
import About from "../../components/About";
import Works from "../../components/Works";
import Contact from "../../components/Contact";

function HomePage() {
    return(
        <>
            <Header />
            <Landing />
            <About />
            <Works />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage