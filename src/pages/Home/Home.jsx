import { useEffect, useState } from "react"
import About from "../../components/home/About/About"
import Contact from "../../components/home/Contact/Contact"
import Experience from "../../components/home/Experience/Experience"
import Feedbacks from "../../components/home/Feedbacks/Feedbacks"
import Hero from "../../components/home/Hero/Hero"
import Skills from "../../components/home/Skills/Skills"
import Work from "../../components/home/Work/Work"
import SplashScreen from "../../pages/SplashScreen/SplashScreen"
import SEO from "../../components/shared/SEO/SEO"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [])

    return (
        <div>
            <SEO description={""} name={"Moones Mezher"} title={"Home - Moones Mezher"} type={"website"}/>
            <SplashScreen isLoading={isLoading}/>
            {!isLoading &&<>
                <Hero/>
                <About/>
                <Experience/>
                <Work/>
                <Skills/>
                <Feedbacks/>
                <Contact/>
            </>}
        </div>
    )
}

export default Home