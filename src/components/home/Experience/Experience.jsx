import ScrollAnimation from "react-animate-on-scroll"
import MainHeaderTitle from "../../shared/MainHeaderTitle/MainHeaderTitle"
import ExpCard from "./ExpCard/ExpCard"
import './Experience.css'
import { MdWork } from "react-icons/md"
import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../../api"

const data = [
    {
        company: "Focal X",
        job: "MERN Stack Supervisor",
        startDate: "2024/6/1",
        endDate: "present",
        description: "I worked within the company after completing the training period in the field of Full Stack and obtaining the certificate with a percentage of 94, which made them offer me the opportunity to supervise the training of the seventh batch of Mern Stack. Thus, I worked to transfer my knowledge and experience as a Mern Stack developer to the trainees and answer all their questions and help solve technical, practical or academic problems in their journey to become strong developers. I always work to communicate with the trainees and answer all their inquiries related to the field. What I focus on most is transferring my experience as an engineer and not just as a programmer."
    },
    {
        company: "Spark",
        job: "MERN Stack Developer",
        startDate: "2024/4/1",
        endDate: "2024/10/1",
        description: "I worked within the company on several projects and communicated with several experts in the fields of Front End, UI/UX and Back End. In addition, I gained great experience in working on more than one project at the same time. In the midst of all this, I was able to prove myself as the youngest developer in the company and one of the most efficient. One of the things that they describe me as most within the company is that I have a strong heart or that I have great confidence in my work and in what I do."
    },
    {
        company: "Freelance",
        job: "Full Stack Developer",
        startDate: "2023/5/13",
        endDate: "present",
        description: "I worked within the company after completing the training period in the field of Full Stack and obtaining the certificate with a percentage of 94, which made them offer me the opportunity to supervise the training of the seventh batch of Mern Stack. Thus, I worked to transfer my knowledge and experience as a Mern Stack developer to the trainees and answer all their questions and help solve technical, practical or academic problems in their journey to become strong developers. I always work to communicate with the trainees and answer all their inquiries related to the field. What I focus on most is transferring my experience as an engineer and not just as a programmer."
    }
]

const Experience = () => {
    const [exp, setExp] = useState(data);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {        
    //     setLoading(true)
    //     axios.get(API.EXPERIENCE.GET)
    //         .then(res => {
    //             if(res?.data?.state === 'success') {
    //                 setExp(res?.data?.data)
    //             }
    //         })
    //         .finally(e => {
    //             setLoading(false)
    //         });
    // }, []);

    return (
        <section id="experience" className="section relative">
            <MainHeaderTitle title={'My Experience'} subtitle={'A Career Built on Code, Creativity, and Passion'} description={<MdWork className="mx-auto text-[2rem]" />}/>
            <div className="bg absolute left-0 top-0 w-full"/>
            <div className="grid gap-5 container mx-auto experince-grid">
                {!loading && exp && exp?.map((e,i) => <ScrollAnimation animateIn="slideInUp" animateOnce={false} delay={i*50} key={i}>
                        <ExpCard info={e}/>
                    </ScrollAnimation>
                )}
            </div>
        </section>
    )
}

export default Experience