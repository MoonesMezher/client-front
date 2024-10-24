import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
    Typography,
    Input,
} from "@material-tailwind/react";

export function MainAlert( { open, setOpen, title, message, handleClick } ) {
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <section className="grid place-items-center h-screen">
            <Dialog className="p-4" size="md" open={open} handler={handleOpen}>
                <DialogHeader className="justify-between">
                <IconButton
                    color="gray"
                    size="sm"
                    variant="text"
                    onClick={handleOpen}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </IconButton>
                </DialogHeader>
                <DialogBody className="overflow-y-scroll">
                <Typography color="blue-gray" className="mb-1 font-bold">
                    { title + " " +open }
                </Typography>
                <Typography
                    variant="paragraph"
                    className="font-normal text-gray-600 max-w-lg"
                >
                    { message }
                </Typography>
                <div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <Button color="gray" className="w-full lg:max-w-[15rem] mx-auto mt-5" onClick={handleClick}>
                            I understant, delete item
                        </Button>
                    </div>
                </div>
                </DialogBody>
            </Dialog>
        </section>
    );
}

export default MainAlert;