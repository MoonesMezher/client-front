import { Button, Card, CardBody, CardHeader, IconButton, Typography } from "@material-tailwind/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import MainAlert from "../../components/shared/MainAlert/MainAlert";
import { useState } from "react";

const TABLE_HEAD = [
    {
        title: 'Id',
        customeStyle: ''
    },
    {
        title: 'Title',
        customeStyle: ''
    },
    {
        title: 'Control',
        customeStyle: ''
    },
]

const TABLE_ROW = [
    {
        id: 1,
        title: 'HTML'
    },{
        id: 2,
        title: 'CSS'
    },{
        id: 1,
        title: 'JS'
    }
]

function SkillsAdmin() {
    const [open, setOpen] = useState(false);

    return (
        <main className="min-h-screen py-16">
            <Link to={'add'}>
                <Button
                    color="gray"
                    className="w-full px-4 md:w-[12rem] mx-auto block mt-10"
                >
                    Add a new skill card
                </Button>
            </Link>
            <section className="m-10">
                <Card className="h-full w-full">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none flex flex-wrap gap-4 justify-between mb-4"
                >
                    <div>
                    <Typography variant="h6" color="blue-gray">
                        Skills section informations
                    </Typography>
                    <Typography
                        variant="small"
                        className="text-gray-600 font-normal mt-1"
                    >
                        You can add, delete and update each of the following informations
                    </Typography>
                    </div>           
                </CardHeader>
                <CardBody className="overflow-scroll !px-0 py-2">
                    <table className="w-full min-w-max table-auto">
                    <thead>
                        <tr>
                        {TABLE_HEAD.map(({ title, customeStyle }) => (
                            <th
                            key={title}
                            className={`border-b border-gray-300 !p-4 pb-8 ${customeStyle}`}
                            >
                            <Typography
                                color="blue-gray"
                                variant="small"
                                className="!font-bold"
                            >
                                {title}
                            </Typography>
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {TABLE_ROW.map(
                        (
                            {
                                id,
                                title
                            },
                            index
                        ) => {
                            const isLast = index === TABLE_ROW.length - 1;
                            const classes = isLast
                            ? "!p-4"
                            : "!p-4 border-b border-gray-300";
                            return (
                            <tr key={index}>
                                <td className={classes}>
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="!font-semibold"
                                    >
                                    {id}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="!font-semibold"
                                    >
                                    {title}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                <div className="flex justify-center gap-4">
                                    <Link to={'edit/'+index}>
                                        <IconButton variant="text" size="sm">
                                            <FaEdit className="h-5 w-5 text-gray-900" />
                                        </IconButton>
                                    </Link>
                                    <IconButton variant="text" size="sm" color="red" onClick={() => setOpen(index+1)}>
                                        <FaTrash className="h-5 w-5 text-red-500" />
                                    </IconButton>
                                </div>
                                </td>
                            </tr>
                            );
                        }
                        )}
                    </tbody>
                    </table>
                </CardBody>
                </Card>
            </section>
            <MainAlert 
                setOpen={setOpen} 
                open={open} 
                title="Delete item"
                message={"Are you sure you want to delete this item?"}
                handleClick={() => 1}
                />
        </main>
    );
}

export default SkillsAdmin;