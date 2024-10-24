import { Typography } from "@material-tailwind/react"

const MainHeaderTitle = ( { title, subtitle, description } ) => {
    return (
        <section className="px-8 pb-8 relative z-10">
                <div className="container mx-auto text-center">
                    { description && <Typography className="mb-4 font-normal !text-lg mx-auto max-w-3xl !text-black">
                        { description }
                    </Typography>}
                    <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-4 !text-base lg:!text-2xl"
                    >
                        { title }
                    </Typography>
                    { subtitle && <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 !text-3xl lg:!text-5xl lg:mb-20 "
                    >
                        { subtitle }
                    </Typography>}
                </div>
            </section>
    )
}

export default MainHeaderTitle