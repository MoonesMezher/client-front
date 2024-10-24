import { useRef } from "react";
// @material-tailwind/react
import {
    Input,
    Typography,
    Button
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";


// @heroicons/react
function ProjectsAdminEdit() {
    const { id } = useParams();

    return (
        <section className="px-8 py-20 container mx-auto min-h-screen">
            <Typography variant="h5" color="blue-gray">
                Projects Panel
            </Typography>
            <Typography
                variant="small"
                className="text-gray-600 font-normal mt-1"
            >
                Update project information below.
            </Typography>
            <div className="flex flex-col mt-8">
                <div className="mb-6 flex flex-col items-end gap-4">
                <div className="w-full">
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                    >
                    Title
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="Quiz app..."
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
                    Type
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="Website..."
                    labelProps={{
                        className: "hidden",
                    }}
                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    />
                </div>
                </div>
                <div className="mb-6 flex flex-col items-end gap-4">
                <div className="w-full">
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                    >
                    Subtitle
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="This app it provides a wonderfull experience..."
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
                    Link
                    </Typography>
                    <Input
                    size="lg"
                    placeholder="http://example.com"
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
                    update
                </Button>
            </div>
        </section>
    );
}

export default ProjectsAdminEdit;