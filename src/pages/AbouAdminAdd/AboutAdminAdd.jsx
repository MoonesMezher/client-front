import { Input, Typography, Button } from "@material-tailwind/react"

const AboutAdminAdd = () => {
    return (
        <section className="px-8 py-20 container mx-auto min-h-screen">
            <Typography variant="h5" color="blue-gray">
                About Panel
            </Typography>
            <Typography
                variant="small"
                className="text-gray-600 font-normal mt-1"
            >
                Add your about questions information below.
            </Typography>
            <div className="flex flex-col mt-8">
                <div className="mb-6 flex flex-col items-end gap-4">
                <div className="w-full">
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                    >
                    Question
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="Full Stack Developer"
                    labelProps={{
                        className: "hidden",
                    }}
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    />
                </div>
                <div className="w-full">
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                    >
                    Answer
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="Get ready to experience..."
                    labelProps={{
                        className: "hidden",
                    }}
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    />
                </div>
                </div>
                <Button
                    color="gray"
                    className="w-full px-4 md:w-[12rem] mx-auto"
                    >
                    add
                </Button>
            </div>
        </section>
    )
}

export default AboutAdminAdd