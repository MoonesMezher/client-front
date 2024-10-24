import { RiArrowRightUpLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"

const Blogs = () => {
    const data = [
        {slug: 'ssssssssss', title: 'Node js with React'},
        {slug: 'ssssssssss', title: 'Node js with React'},
        {slug: 'ssssssssss', title: 'Node js with React'},
        {slug: 'ssssssssss', title: 'Node js with React'},
        {slug: 'ssssssssss', title: 'Node js with React'},
        {slug: 'ssssssssss', title: 'Node js with React'},
        {slug: 'ssssssssss', title: 'Node js with React'},
    ]

    const to = useNavigate();

    return (
        <div className="min-h-screen px-2 md:px-10 pt-[90px] bg-[#43b0f1]">
            <h1 className="font-bold text-center text-[2rem] mb-5 text-white">My Blogs</h1>
            {data.map((e, i) => <h2 key={i} onClick={() => to("/blogs/"+e.slug)} className="opacity-80 font-bold py-3 cursor-pointer duration-300 hover:ps-2 hover:opacity-100 w-fit flex items-center text-white">{i+1}-  {e.title} <RiArrowRightUpLine className="ms-2"/></h2>)}
        </div>
    )
}

export default Blogs