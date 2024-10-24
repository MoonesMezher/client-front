import { IconButton, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { facebook, instagram, linkedin, mail, phone } from "../../../constant";

const links = ["Engineer", "Developer", "Programmer"];
const currentYear = new Date().getFullYear();

export function Footer() {
    const [bgColor, setBgColor] = useState("bg-white");

    const { pathname } = useLocation()

    useEffect(() => {
        setBgColor(pathname.includes("mm-admin")? "bg-blue-gray-50": "bg-white")
    }, [pathname]);
    return (
        <footer className={`px-8 py-10 ${bgColor}`}>
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
                    {links.map((link, index) => (
                        <ul key={index}>
                            <li>
                                <Typography
                                    // as="a"
                                    // href="#"
                                    color="white"
                                    className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                                >
                                {link}
                                </Typography>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
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
                <Typography
                    color="blue-gray"
                    className="mt-6 !text-sm !font-normal text-gray-500"
                >
                    Copyright &copy; {currentYear} - Moones Mezher
                </Typography>
            </div>
        </footer>
    );
}
export default Footer;