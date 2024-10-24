import { IconButton, Typography } from "@material-tailwind/react"
import MainHeaderTitle from "../../shared/MainHeaderTitle/MainHeaderTitle"
import { FaFacebook, FaRegSmileWink, FaGoogle, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import ScrollAnimation from "react-animate-on-scroll";
import { facebook, instagram, linkedin, mail, phone } from "../../../constant";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../../api";

const data = [
    {
        question: "What's your favorite programming language and why?",
        answer: "My favorite programming language is JavaScript. I love its versatility, flexibility, and the endless possibilities it offers. From front-end development to back-end scripting, JavaScript allows me to create dynamic and interactive experiences that bring ideas to life. Its constantly evolving nature also keeps me on my toes, ensuring I'm always learning and improving my skills.",
    },
    {
        question: "How do you stay up-to-date with the latest technologies?",
        answer: "I believe staying current with the latest technologies is crucial in the ever-changing landscape of development. To achieve this, I make it a point to read books and articles on emerging trends and technologies. I also leverage AI tools to streamline my workflow and stay informed about the latest advancements. Additionally, I participate in online forums and communities to learn from others, share my knowledge, and stay connected with the developer ecosystem",
    },
    {
        question: "What do you like to do in your free time?",
        answer: "In my free time, I enjoy reading books and writing. I find solace in the written word, and it helps me relax and recharge. Reading expands my knowledge, sparks new ideas, and broadens my perspective, while writing allows me to express myself creatively and process my thoughts. These activities help me maintain a healthy work-life balance and keep my mind sharp.",
    },
    {
        question: "What do you value most in a work environment?",
        answer: "When it comes to a work environment, I value a culture that fosters collaboration, open communication, and mutual respect. I believe that a positive and supportive atmosphere is essential for growth, innovation, and productivity. I thrive in environments where I can share my ideas, learn from others, and contribute to a common goal.",
    },
    {
        question: "How do you approach problem-solving, and what's your thought process?",
        answer: "When faced with a problem, I adopt a systematic approach. I start by breaking down the issue into manageable components, identifying the key challenges, and researching potential solutions. I then leverage AI tools and online resources to find the most effective and efficient solutions. Throughout the process, I remain open to feedback, willing to adapt, and committed to finding the best possible outcome.",
    },
    {
        question: "What is make you pro in your work?",
        answer: "I believe what sets me apart is my ability to manage my time effectively, prioritize tasks, and maintain a high level of energy and enthusiasm. I'm passionate about my work, and I'm committed to delivering high-quality results. By staying focused, organized, and dedicated, I'm able to consistently produce excellent work and exceed expectations.",
    }
]

const About = () => {
    const [questions, setQuestions] = useState(data);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {        
    //     setLoading(true)
    //     axios.get(API.ABOUT.GET)
    //         .then(res => {
    //             if(res?.data?.state === 'success') {
    //                 setQuestions(res?.data?.data)
    //             }
    //         })
    //         .finally(e => {
    //             setLoading(false)
    //         });
    // }, []);

    return (
        <section className="bg-white section" id={"about"}>
            <MainHeaderTitle title={'About Me'} subtitle={'Get to Know the Developer Behind the Code'} description={<FaCircleUser className="text-[2rem] mx-auto"/>}/>
                <div className="mx-auto grid gap-10 container">
                    {!loading && questions && questions?.map((e, i) => (
                        <ScrollAnimation animateIn="slideInLeft" animateOnce={false} delay={i*50} key={i}>
                            <div>
                                <Typography color="blue-gray" className="pb-6 text-[20px] font-bold">
                                    {e?.question}
                                </Typography>
                                <div className="border-t border-gray-200 pt-4">
                                    <Typography className="font-normal !text-black">
                                    {e?.answer}
                                    </Typography>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-16 flex-wrap">
                    <a target="_blank" href={facebook}>
                        <IconButton variant="text" color="blue">
                            <FaFacebook className="text-[1.5rem]"/>
                        </IconButton>
                    </a>
                    <a target="_blank" href={instagram}>
                        <IconButton variant="text" color="pink">
                            <FaInstagram className="text-[1.5rem]"/>
                        </IconButton>
                    </a>
                    <a target="_blank" href={linkedin}>
                        <IconButton variant="text" color="blue">
                            <FaLinkedin className="text-[1.5rem]"/>
                        </IconButton>
                    </a>
                    <a target="_blank" href={"https://wa.me/"+phone}>
                        <IconButton variant="text" color="green">
                            <FaWhatsapp className="text-[1.5rem]"/>
                        </IconButton>
                    </a>
                    <a target="_blank" href={"mailto:"+mail}>
                        <IconButton variant="text" color="red">
                            <BiLogoGmail className="text-[1.5rem]"/>
                        </IconButton>
                    </a>
                </div>
        </section>
    )
}

export default About