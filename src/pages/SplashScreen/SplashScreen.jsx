import { useEffect, useState, useRef } from "react"

const SplashScreen = ({ isLoading }) => {
    const circle = useRef();

    useEffect(() => {
        setTimeout(() => {
            circle.current.style.borderColor = "transparent transparent transparent #43b0f1";
        }, 200)

        setTimeout(() => {
            circle.current.style.borderColor = "#43b0f1 transparent transparent #43b0f1";
        }, 800)

        setTimeout(() => {
            circle.current.style.borderColor = "#43b0f1 #43b0f1 transparent #43b0f1";
        }, 1600)

        setTimeout(() => {
            circle.current.style.borderColor = "#43b0f1 #43b0f1 #43b0f1 #43b0f1";
        }, 2400)
    }, [])

    return (
        <div className={`bg-transparent w-full min-h-screen flex justify-center items-center fixed left-0 top-0 z-50 flex-col duration-1000 ${isLoading? 'scale-100': 'scale-0'}`}>
            <div className={`relative z-10 duration-100 ${isLoading? 'scale-100':'scale-0'}`}>
                <div className={`w-[100px] h-[100px] overflow-hidden duration-300 mx-auto`}>
                    <img src="/logo3.svg" className="w-full h-full object-cover"/>
                </div>
                <div className={`w-[300px] h-[300px] overflow-hidden bg-transparent border-[5px] border-solid border-transparent absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full`} ref={circle}/>
                <div className="text-black text-center mt-3 relative italic">
                    <h1>MOONES MEZHER</h1>
                    <h2>SOFTWARE ENGINEER</h2>
                    <div className="absolute left-0 top-0 w-full h-full bg-white animate-full"/>
                </div>
            </div>
            <div className={`absolute duration-1000 ${isLoading ?'left-0':'left-[-100%] rounded-full shadow-md'} top-0 w-[50%] h-full bg-white z-0`}/>
            <div className={`absolute duration-1000 ${isLoading ?'right-0':'right-[-100%] rounded-full shadow-md'} top-0 w-[50%] h-full bg-white z-0`}/>
        </div>
    )
}

export default SplashScreen