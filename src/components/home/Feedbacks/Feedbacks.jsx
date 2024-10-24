import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import MainHeaderTitle from "../../shared/MainHeaderTitle/MainHeaderTitle"
import './Feedbacks.css'
import ScrollAnimation from "react-animate-on-scroll";
import { VscFeedback } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import API from "../../../api";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        feedback: "Moones is a motivated individual with a passion for Full Stack. He demonstrated exceptional creativity, attention to detail, technical exprertise, teamwork, and adaptability during the program.",
        postion: "Founder & CEO @ Focal X",
        name: 'Alaa Darwish',
        picture: "WW"
    },
    {
        feedback: "Moones is a motivated individual with a passion for Full Stack. He demonstrated exceptional creativity, attention to detail, technical exprertise, teamwork, and adaptability during the program.",
        postion: "Founder & CEO @ Focal X",
        name: 'Alaa Darwish',
        picture: "WW"
    },
    {
        feedback: "Moones is a motivated individual with a passion for Full Stack. He demonstrated exceptional creativity, attention to detail, technical exprertise, teamwork, and adaptability during the program.",
        postion: "Founder & CEO @ Focal X",
        name: 'Alaa Darwish',
        picture: "WW"
    },
    // {
    //     feedback: "Moones Mezher is a proficient MERN Stack Developer, crafting innovative web solutions with his expertise in MongoDB, Express.js, React, and Node.js.",
    //     postion: "Founder & CEO @ Spark",
    //     name: 'Danyal Mershed',
    //     picture: "WW"
    // },
]

function FeedbackCard({
    img,
    client,
    title,
    clientInfo}) {
    return (
        <Card shadow={true} className="bg-white rounded-2xl p-6 text-center md:text-left border w-full md:w-[700px] mx-auto my-2">
            <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
                color="blue-gray"
                className="lg:mb-10 mb-4 text-2xl font-bold"
            >
                &quot;{title}&quot;
            </Typography>
            </CardHeader>
            <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
            <div className="mx-auto md:mx-0">
                <Typography
                variant="paragraph"
                className="font-normal !text-gray-500"
                >
                {clientInfo}
                </Typography>
                <Typography variant="h6" color="blue-gray">
                {client}
                </Typography>
            </div>
            {/* <img src={img} className="max-w-[8rem]" alt={client} /> */}
            </CardBody>
        </Card>
    );
}

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState(data);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const sliderRef = useRef();

    const handleButtonClick = (i) => {
        setIndex(i);
        sliderRef.current.slickGoTo(i);
    };

    const handleAfterChange = (currentSlide) => {
        setIndex(currentSlide);
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        afterChange: handleAfterChange
    }

    // useEffect(() => {        
    //     setLoading(true)
    //     axios.get(API.FEEDBACKS.GET)
    //         .then(res => {
    //             if(res?.data?.state === 'success') {
    //                 setFeedbacks(res?.data?.data)
    //             }
    //         })
    //         .finally(e => {
    //             setLoading(false)
    //         });
    // }, []);

    return (
        <section className="bg-white section">
            <MainHeaderTitle title={'Feedbacks'} subtitle={'What Others Say'} description={<VscFeedback className="text-[2rem] mx-auto"/>}/>
            <ScrollAnimation animateIn="slideInUp" animateOnce={false}>
                <Slider {...settings} ref={sliderRef} className="flex justify-center overflow-hidden">
                    {!loading && feedbacks && feedbacks?.map((e, i) => <FeedbackCard client={e.postion} clientInfo={e.name} img={e.picture} title={e.feedback} key={i}/>)}
                </Slider>
                <div className="flex justify-center items-center gap-[10px] absloute bottom-[0] z-[10] mt-10">
                    {!loading && feedbacks && feedbacks?.map((e, i) => <div key={i} className={`rounded-full shadow-[#ccc] w-[20px] h-[20px] cursor-pointer ${index === i? 'bg-[#43b0f1]': 'bg-white border-[1px] border-solid border-[#43b0f1]'} duration-00 hover:bg-[#43b0f1]`} onClick={() => handleButtonClick(i)}></div>)}
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default Feedbacks