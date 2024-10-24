import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import SEO from "../../components/shared/SEO/SEO";
import API from "../../api";
import axios from "axios";
import Toast from "../../components/shared/Toast/Toast";
import Loading from "../../components/shared/Loading/Loading";

export function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState(false)
    const [alert, setAlert] = useState([])
    const [error, setError] = useState(false)

    const handleLogin = () => {
        if(loading) {
            return;
        }

        setToast(true);
        setLoading(true);
        setError(false)
        
        const data = { id, password, email};

        axios.post(API.USERS.LOGIN, data)
            .then(res => {
                setError(false)
                if(res.data.state === 'success') {
                    setAlert(["Logged in successfully"])
                    setTimeout(() => {
                        localStorage.setItem('admin-moones', res?.data?.token);
                        location.reload()
                    }, 2000)
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
        <section className="grid text-center h-screen items-center p-8 section min-h-screen">
            <Toast show={toast}>
                <Loading loading={loading}/>
                {alert && alert.length > 0 && alert.map((e, i) => <p className={`text-center font-bold w-full ${error? 'text-red-500':'text-green-500'}`}>
                    {e}
                </p>)}
            </Toast>
            <div className="container mx-auto">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Log In
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                    Enter your email, password and id to log in
                </Typography>
                <form action="#" className="mx-auto max-w-[24rem] text-left">
                    <div className="mb-6">
                        <label htmlFor="email">
                        <Typography
                            variant="small"
                            className="mb-2 block font-medium text-gray-900"
                        >
                            Your Email
                        </Typography>
                        </label>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            placeholder="name@mail.com"
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password">
                        <Typography
                            variant="small"
                            className="mb-2 block font-medium text-gray-900"
                        >
                            Password
                        </Typography>
                        </label>
                        <Input
                            size="lg"
                            placeholder="********"
                            labelProps={{
                                className: "hidden",
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            type={passwordShown ? "text" : "password"}
                            icon={
                                <i onClick={togglePasswordVisiblity}>
                                {passwordShown ? (
                                    <BsEye className="h-5 w-5" />
                                ) : (
                                    <BsEyeSlash className="h-5 w-5" />
                                )}
                                </i>
                            }
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="id">
                        <Typography
                            variant="small"
                            className="mb-2 block font-medium text-gray-900"
                        >
                            Your ID
                        </Typography>
                        </label>
                        <Input
                            id="id"
                            color="gray"
                            size="lg"
                            type="string"
                            name="id"
                            placeholder="id"
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            labelProps={{
                                className: "hidden",
                            }}
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <Button color="gray" size="lg" className="mt-6" fullWidth onClick={handleLogin}>
                        log in
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default Login;