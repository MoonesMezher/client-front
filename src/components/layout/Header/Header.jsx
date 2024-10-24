import { Button, Collapse, IconButton, Navbar, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavItem({ label, link }) {
    return (
        <a href={link}>
            <Typography as="li" color="blue-gray" className="p-1 font-medium duration-300 lg:hover:text-black">
                {label}
            </Typography>
        </a>
    );
}

function NavList() {
    const to = useNavigate();

    const handleGoToBlogs = () => {
        to('/blogs')
    }
    return (
        <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 px-3">
            <NavItem label="About Me" link={'/#about'} />
            <NavItem label="My Experience" link={'/#experience'}/>
            <NavItem label="My Work" link={'/#work'}/>
            <NavItem label="My Skills" link={'/#skills'}/>
            {/* <div onClick={handleGoToBlogs}>
                <NavItem label="My Blogs"/>
            </div> */}
        </ul>
    );
}

export function Header() {
    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    useEffect(() => {
        window.addEventListener("resize",() => window.innerWidth >= 960 && setOpen(false));
    }, []);

    window.onscroll = () => {
        setNav(window.scrollY > 10);
    }

    const { pathname } = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [pathname])

    return (
        <header className="fixed left-0 top-0 w-full z-50">
            <Navbar color={nav? "white": "transparent"} fullWidth className="duration-200">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Link to={'/'}
                        className="mr-4 cursor-pointer text-lg font-bold w-[50px] h-[50px]"
                        onClick={() => window.scrollTo(0,0)}
                    >
                        <img src={'/logo3.svg'} className="w-full h-full"/>
                    </Link>
                    <div className="hidden lg:block">
                    <NavList/>
                    </div>
                    <a href={'/#contact'} className="lg:block">
                    <Button color="gray" className="hidden lg:inline-block">
                        Get in Touch
                    </Button>
                    </a>
                    <IconButton
                        size="sm"
                        variant="text"
                        color="blue-gray"
                        onClick={handleOpen}
                        className="ml-auto inline-block text-blue-gray-900 lg:hidden"
                    >
                        {open ? (
                            <CgClose className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <FaBars className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={open}>
                    <div className="mt-2 rounded-[8px] bg-white py-2">
                    <NavList />
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;