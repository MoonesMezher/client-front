import { useRef } from "react";
// @material-tailwind/react
import {
    Input,
    Typography,
    Button
} from "@material-tailwind/react";


// @heroicons/react
function FeedbacksAdminAdd() {
    const fileInput = useRef();

    const handleClickFileInput = () => {
        fileInput.current.click();
    }

    return (
        <section className="px-8 py-20 container mx-auto min-h-screen">
            <Typography variant="h5" color="blue-gray">
                Feedbacks Panel
            </Typography>
            <Typography
                variant="small"
                className="text-gray-600 font-normal mt-1"
            >
                Add your feedback information below.
            </Typography>
            <div className="flex flex-col mt-8">
                <div className="mb-6 flex flex-col items-end gap-4">
                <div className="w-full">
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                    >
                    Feedback
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="It have broadened my horizons and helped me advance my career..."
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
                    Name of owner this feedback
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="Rami ..."
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
                    Postion (and the company) of owner this feedback
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="Full Stack Developer @Netflix ..."
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
                    Photo of owner this feedback
                    </Typography>
                    <Button
                        color="gray"
                        className="w-full px-4 md:w-[12rem]"
                        onClick={handleClickFileInput}
                    >
                        choose a photo
                    </Button>
                    <Input
                        inputRef={fileInput}
                        size="lg"
                        type="file"
                        placeholder=".png (200 * 200)"
                        labelProps={{
                            className: "hidden",
                        }}
                        className="w-full hidden placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
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
    );
}

export default FeedbacksAdminAdd;