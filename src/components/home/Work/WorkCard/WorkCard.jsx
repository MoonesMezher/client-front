import { Button, Typography } from "@material-tailwind/react"

const WorkCard = ( { info } ) => {
    return (
        <div className="p-10 rounded-l-xl border border-blue-gray-100 rounded-xl bg-white overflow-hidden">
            <Typography
                variant="small"
                color="blue-gray"
                className="font-bold mb-2"
            >
                { info.type }
            </Typography>
            <Typography variant="h3" color="blue-gray">
                { info.title }
            </Typography>
            {/* <Typography
                className="mt-2 mb-6 !text-base font-normal text-gray-500"
            >
                { info.description }
            </Typography> */}
            {info.link && <a href={info.link} className="mt-5 block">
                    <Button variant="outlined" className="flex-shrink-0">
                    see now
                    </Button>
                </a>}
        </div>
    )
}

export default WorkCard