import { Button, Card, CardBody, CardHeader, IconButton, Typography } from "@material-tailwind/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import MainAlert from "../../components/shared/MainAlert/MainAlert";
import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../api";

const TABLE_HEAD = [
    {
        title: 'Id',
        customeStyle: ''
    },
    {
        title: 'Name',
        customeStyle: ''
    },
    {
        title: 'Email',
        customeStyle: ''
    },{
        title: 'Phone',
        customeStyle: ''
    },
    {
        title: 'Message',
        customeStyle: ''
    },
    {
        title: 'Type',
        customeStyle: ''
    },
    {
        title: 'Delete',
        customeStyle: ''
    },
]

const TABLE_ROW = [
    {
        id: 1,
        name: 'Rami ...',
        email: 'rami@gmail.com',
        phone: '+963998025766',
        message: 'The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!',
    },{
        id: 2,
        name: 'Rami ...',
        email: 'rami@gmail.com',
        phone: '+963998025766',
        message: 'The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!',
    },{
        id: 3,
        name: 'Rami ...',
        email: 'rami@gmail.com',
        phone: '+963998025766',
        message: 'The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!',
    }
]

function MessagesAdmin() {
    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState(false)
    const [alert, setAlert] = useState([])
    const [data, setData] = useState([])
    const [change, setChange] = useState(false)

    useEffect(() => {
        setToast(true);
        setLoading(true);

        axios.get(API.MESSAGES.GET, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('admin-moones'),
            }
        })
            .then(res => {
                if(res.data.state === 'success') {
                    console.log(res.data.data)
                    setData(res.data.data)                    
                }
            })
            .catch(err => {
            })
            .finally(res => {
                setLoading(false);
                setToast(false)
            })
    }, [change])

    const handleDelete = () => {
        if(!open) {
            return;
        }

        setToast(true);
        setLoading(true);

        axios.delete(API.MESSAGES.DELETE+open, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('admin-moones'),
            }
        })
            .then(res => {
                if(res.data.state === 'success') {
                    setChange(!change)
                }
            })
            .catch(err => {
            })
            .finally(res => {
                setLoading(false);
                setToast(false)
                setOpen(false)
            })
    }

    return (
        <main className="min-h-screen py-16">
            <section className="m-10">
                <Card className="h-full w-full">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none flex flex-wrap gap-4 justify-between mb-4"
                >
                    <div>
                    <Typography variant="h6" color="blue-gray">
                        Messages section informations
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
                        {!loading && data && data.map(
                        (
                            {
                                _id,
                                name,
                                email,
                                phone,
                                type,
                                body: message
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
                                    {index+1}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="!font-semibold"
                                    >
                                    {name}
                                    </Typography>
                                </td> 
                                <td className={classes}>
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="!font-semibold"
                                    >
                                    {email}
                                    </Typography>
                                </td><td className={classes}>
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="!font-semibold"
                                    >
                                    {phone}
                                    </Typography>
                                </td> 
                                <td className={classes}>
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="!font-semibold"
                                    >
                                    {message}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="!font-semibold"
                                    >
                                    {type === 'A'? 'General':'Business'}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                <div className="flex justify-center gap-4">
                                    <IconButton variant="text" size="sm" color="red" onClick={() => setOpen(_id)}>
                                        <FaTrash className="h-5 w-5 text-red-500"/>
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
                handleClick={handleDelete}
                />
        </main>
    );
}

export default MessagesAdmin;