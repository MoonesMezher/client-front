import { Button, Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom"

const DashCard = ( { info } ) => {
    return (
        <div className="p-10 rounded-l-xl border border-blue-gray-100 rounded-xl bg-white relative">
            { (info.title.includes('Messages') || info.title.includes('Statistics')) 
            && <div className="absolute right-[1rem] top-0 bg-[#2196f3] p-2 text-white rounded-b-md">New</div>}
            <Typography variant="h3" color="blue-gray">
                { info.title }
            </Typography>
            <Link to={info.url}>
                <Button variant="outlined" className="flex-shrink-0 mt-5">
                    head to settings
                </Button>
            </Link>
        </div>
    )
}

export default DashCard