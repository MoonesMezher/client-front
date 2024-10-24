import {
    Button,
    Typography,
} from "@material-tailwind/react";
import Img from '../../../assets/images/home/moones.jpg'
import generateAlt from '../../../helpers/generateAlt'
import { useState, useEffect } from "react";
import './Hero.css'

function Hero() {
    const [index, setIndex] = useState(0);

    const titles = [
        "Software Engineer",
        "MERN Stack Developer",
    ]
    
    useEffect(() => {
        setIndex(0)
        // console.log(titles[index]);
    }, []);
    return (
        <div className="bg-white relative max-h-screen section h-screen hero">
            <div className="hero-grid grid w-full h-screen place-items-stretch bg-center bg-contain bg-no-repeat absolute z-10 left-0 top-0">
                <div className="container mx-auto px-4 text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-55%]">
                        <div className="rounded-full w-[200px] h-[200px] overflow-hidden mx-auto mb-10">
                            <img src={Img} alt={generateAlt(Img)} className="object-cover w-full h-full"/>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center items-center">
                            {titles.map((e, i) => 
                                <Typography key={i} className={`text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary inline-flex`}>
                                    {e}
                                </Typography>
                            )}                        
                        </div>
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                        >
                            Where passion meets{" "}
                        <span className="leading-snug text-white">
                        expertise
                        </span>
                        ,{" "}and{" "}
                        <span className="leading-snug text-white">
                        amazing{" "}
                        </span>
                        things happen.
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mx-auto w-full !text-white lg:text-lg text-base"
                        >
                        From concept to reality, I bring your vision to life.
                        </Typography>
                        <div className="mt-8 grid w-full place-items-start md:justify-center">
                        <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                        <a download={true} href="/src/assets/files/moones mezher.pdf">
                            <Button
                            color="gray"
                            className="w-full px-4 md:w-[12rem]"
                            >
                                view my resume
                            </Button>
                        </a>
                        </div>
                        </div>
                </div>
            </div>
            <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;