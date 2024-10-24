import { Typography } from "@material-tailwind/react"
import { FaArrowRight } from "react-icons/fa"

const ExpCard = ( { info } ) => {
    return (
        <div className="p-10 rounded-l-xl border border-blue-gray-100 rounded-xl bg-white duration-300 hover:scale-[1.02] overflow-hidden w-full">
            <Typography
                variant="small"
                color="blue-gray"
                className="font-bold mb-2"
            >
                { info.company }
            </Typography>
            <Typography variant="h3" color="blue-gray">
                { info.job }
            </Typography>
            <Typography
                className="mt-2 !text-base font-normal text-gray-500 flex items-center gap-2"
            >
                { info.startDate } <FaArrowRight color="black"/> {info.endDate}
            </Typography>
            {/* <Typography
                variant="h6"
                className="mt-2 !text-base font-normal text-black gap-2 w-full"
            >
                { info.description } 
            </Typography> */}
        </div>
    )
}

export default ExpCard