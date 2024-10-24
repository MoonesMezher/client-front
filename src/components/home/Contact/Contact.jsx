import { Button, Input, Textarea, Typography } from "@material-tailwind/react"
import MainHeaderTitle from "../../shared/MainHeaderTitle/MainHeaderTitle"
import ScrollAnimation from "react-animate-on-scroll"
import { FaLocationPin, FaMessage, FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { IoMail } from "react-icons/io5"
import { Link } from "react-router-dom"
import axios from "axios"
import API from "../../../api"
import { useState } from "react"
import Toast from "../../shared/Toast/Toast"
import Loading from "../../shared/Loading/Loading"

const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState(false)
    const [alert, setAlert] = useState([])
    const [error, setError] = useState(false)
    const [type, setType] = useState("A")

    const handleSend = () => {
        if(loading) {
            return;
        }

        setToast(true);
        setLoading(true);
        setError(false)
        
        const data = { firstName, lastName, email, phone, body: message, type };

        axios.post(API.MESSAGES.POST, data)
            .then(res => {
                setError(false)
                if(res.data.state === 'success') {
                    setAlert(["Send message successfully"])
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                    setType("A")
                }
            })
            .catch(err => {
                setError(true)
                if(err?.response?.data?.state === 'failed') {
                    setAlert([err?.response?.data?.message])
                } else {
                    setAlert([err?.message]);
                }
            })
            .finally(res => {
                setLoading(false);
                setTimeout(() => {
                    setAlert(false)
                    setToast(false)
                }, 3000)
            })
    }
    return (
        <section id="contact" className="section relative">
            <Toast show={toast}>
                <Loading loading={loading}/>
                {alert && alert.length > 0 && alert.map((e, i) => <p className={`text-center font-bold w-full ${error? 'text-red-500':'text-green-500'}`}>
                    {e}
                </p>)}
            </Toast>
            <MainHeaderTitle title={'Contact Me'} subtitle={"Let's Talk"} description={<FaMessage className="text-[2rem] mx-auto"/>}/>
                <div className="container flex justify-center items-center mx-auto gap-10 relative z-10 flex-col-reverse lg:flex-row">
                <ScrollAnimation animateIn="slideInLeft" animateOnce={false}>
                    <div className="w-fit flex flex-col gap-[15px]">
                        <a href={'tel:+963998025766'} className="underline-none flex justify-center text-white gap-[10px] text-[1rem] md:text-[1.5rem] items-center">
                            <FaPhone className="text-black"/>
                            <p>+963 998 025 766</p>
                        </a>
                        <a href={'mailto:moonesmezher9@gmail.com'} className="underline-none flex justify-center text-white gap-[10px] text-[1rem] md:text-[1.5rem] items-center">
                            <IoMail className="text-black"/>
                            <p>moonesmezher9@gmail.com</p>
                        </a>
                        <Typography className="flex justify-center text-white gap-[10px] text-[1rem] md:text-[1.5rem] items-center">
                            <FaLocationPin className="text-black"/>
                            <p>Syria, Lattakia</p>
                        </Typography>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight" animateOnce={false}>
                    <form
                        action="#"
                        className="flex flex-col gap-4 lg:max-w-sm"
                    >
                        <Typography
                        variant="small"
                        className="text-left !font-semibold text-white"
                        >
                        Select Options for Your Message
                        </Typography>
                        <div className="flex gap-4">
                        <Button variant="outlined" className={`max-w-fit duration-200 ${type === "A"? 'bg-black text-white':'bg-white text-black'}`} onClick={() => setType("A")}>
                            General
                        </Button>
                        <Button variant="outlined" className={`max-w-fit duration-200 ${type === "B"? 'bg-black text-white':'bg-white text-black'}`} onClick={() => setType("B")}>
                            Business
                        </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-white"
                            >
                            First Name
                            </Typography>
                            <Input
                            size="lg"
                            placeholder="First Name"
                            name="first-name"
                            className="border-none bg-white text-black placeholder:text-black"
                            containerProps={{
                                className: "min-w-full",
                            }}
                            labelProps={{
                                className: "hidden",
                            }}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-white"
                            >
                            Last Name
                            </Typography>
                            <Input
                            size="lg"
                            placeholder="Last Name"
                            name="last-name"
                            className="border-none bg-white text-black placeholder:text-black"
                            containerProps={{
                                className: "!min-w-full",
                            }}
                            labelProps={{
                                className: "hidden",
                            }}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        </div>
                        <div>
                        <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-white"
                        >
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@email.com"
                            name="email"
                            className="border-none bg-white text-black placeholder:text-black"
                            containerProps={{
                            className: "!min-w-full",
                            }}
                            labelProps={{
                            className: "hidden",
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                        <div>
                        <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-white"
                        >
                            Your Phone
                        </Typography>
                        <Input
                            size="lg"
                            type="tel"
                            placeholder="+999 999 999 999"
                            name="phone"
                            className="border-none bg-white text-black placeholder:text-black"
                            containerProps={{
                            className: "!min-w-full",
                            }}
                            labelProps={{
                            className: "hidden",
                            }}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        </div>
                        <div>
                        <Typography
                            variant="small"
                            className="mb-2 text-left font-medium !text-white"
                        >
                            Your Message
                        </Typography>
                        <Textarea
                            rows={6}
                            name="message"
                            className="border-none bg-white text-black placeholder:text-black"
                            containerProps={{
                            className: "!min-w-full",
                            }}
                            labelProps={{
                            className: "hidden",
                            }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        </div>
                        <Button className="w-full" color="gray" onClick={handleSend}>
                        Send message
                        </Button>
                    </form>
                </ScrollAnimation>
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
        </section>

    )
}

export default Contact