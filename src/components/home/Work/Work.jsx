import MainHeaderTitle from "../../shared/MainHeaderTitle/MainHeaderTitle"
import WorkCard from "./WorkCard/WorkCard"
import './Work.css'
import ScrollAnimation from "react-animate-on-scroll"
import { FaFolderOpen } from "react-icons/fa"
import { useEffect, useState } from "react"
import API from "../../../api"
import axios from "axios"

const data = [
    {
        type: "Website",
        title: "MEI rent a car",
        description: "I contributed to this project within Spark as a back-end developer using Node.js and a front-end developer using React.js and Tailwind CSS, where a control panel was designed for the admin in addition to pages to display and book the company's cars. It was a big challenge for me to contribute to both the server and client sides at the same time, but I gained complete knowledge and unique control over the site's features.",
        link: "//www.meirentacar.com"
    },
    {
        type: "Website",
        title: "Spark portfolio",
        description: "I contributed to this project within Spark Company as a front-end developer using React, so that the pages for reviewing the company's services were designed with precision and dedication, relying on the Figma design. Among the features of this project are the unique transition between its pages and the good division of its sections. You can see the additional features that were used by CSS Pure to give strength and attractiveness to the design.",
        link: "//www.sparkengdev.com"
    },
    {
        type: "Website",
        title: "Villa Agency",
        description: "I completed this design during my training period at Focal X, where I used React and Tailwind CSS, which helped me complete it in the fastest time and deliver it before the deadline, in addition to being able to pay attention to the smallest details and issues related to coordination and responsiveness on small screens. For me, this design is considered one of the modest designs, but in fact, simplicity is always better to convey the desired meaning.",
        link: "//https://moonesmezher.github.io/villa"
    },
    {
        type: "App",
        title: "Super quiz",
        description: "One of the biggest projects I worked on using Node.js, as a back end developer, I focused on taking care of the code and separating each section separately, in addition to many features specific to dealing with large data reaching hundreds of thousands. All of this and more I did within this project, in addition to the payment features via Stripe service and real time via Socket Io, so that one of the biggest challenges I went through was ensuring the socket’s connection with the Flutter app and taking care of the transition cases within the game. Thus, we produced a project that is an admin panel and a special application for users as guests or registered, so that they can play several games alone or with a random person or with their friends competing to answer questions within any section they choose, such as sports, culture, or other.",
        link: ""
    },
    {
        type: "Node JS Library",
        title: "Mez Validation",
        description: "One of the biggest projects I worked on using Node.js, as a back end developer, I focused on taking care of the code and separating each section separately, in addition to many features specific to dealing with large data reaching hundreds of thousands. All of this and more I did within this project, in addition to the payment features via Stripe service and real time via Socket Io, so that one of the biggest challenges I went through was ensuring the socket’s connection with the Flutter app and taking care of the transition cases within the game. Thus, we produced a project that is an admin panel and a special application for users as guests or registered, so that they can play several games alone or with a random person or with their friends competing to answer questions within any section they choose, such as sports, culture, or other.",
        link: ""
    },
    {
        type: "Node JS Library",
        title: "Mez Setup",
        description: "One of the biggest projects I worked on using Node.js, as a back end developer, I focused on taking care of the code and separating each section separately, in addition to many features specific to dealing with large data reaching hundreds of thousands. All of this and more I did within this project, in addition to the payment features via Stripe service and real time via Socket Io, so that one of the biggest challenges I went through was ensuring the socket’s connection with the Flutter app and taking care of the transition cases within the game. Thus, we produced a project that is an admin panel and a special application for users as guests or registered, so that they can play several games alone or with a random person or with their friends competing to answer questions within any section they choose, such as sports, culture, or other.",
        link: ""
    },
    {
        type: "Website",
        title: "CRS",
        description: "One of the biggest projects I worked on using Node.js, as a back end developer, I focused on taking care of the code and separating each section separately, in addition to many features specific to dealing with large data reaching hundreds of thousands. All of this and more I did within this project, in addition to the payment features via Stripe service and real time via Socket Io, so that one of the biggest challenges I went through was ensuring the socket’s connection with the Flutter app and taking care of the transition cases within the game. Thus, we produced a project that is an admin panel and a special application for users as guests or registered, so that they can play several games alone or with a random person or with their friends competing to answer questions within any section they choose, such as sports, culture, or other.",
        link: ""
    },
]

const Work = () => {
    const [projects, setProjects] = useState(data);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {        
    //     setLoading(true)
    //     axios.get(API.PROJECTS.GET)
    //         .then(res => {
    //             if(res?.data?.state === 'success') {
    //                 setProjects(res?.data?.data)                    
    //             }
    //         })
    //         .finally(e => {
    //             setLoading(false)
    //         });
    // }, []);

    return (
        <section className="bg-white section" id="work">
            <MainHeaderTitle title={'My Work'} subtitle={'A Collection of Creations'} description={<FaFolderOpen className="mx-auto text-[2rem]"/>}/>
            <div className="works-grid grid gap-5 container mx-auto">
                {!loading && projects && projects.map((e, i) => 
                    <ScrollAnimation animateIn="slideInUp" animateOnce={false} delay={i*50} key={i}>
                        <WorkCard key={i} info={e} />
                    </ScrollAnimation>
                )}
            </div>
        </section>
    )
}

export default Work