import MainHeaderTitle from "../../shared/MainHeaderTitle/MainHeaderTitle"
import SkillsCard from "./SkillsCard/SkillsCard"
import './Skills.css'
import ScrollAnimation from "react-animate-on-scroll"
import { LuBrainCircuit } from "react-icons/lu"
import { useEffect, useState } from "react"
import API from "../../../api"
import axios from "axios"
import Img1 from "../../../assets/images/skills/html.jpg"
import Img2 from "../../../assets/images/skills/JS.jpg"
import Img3 from "../../../assets/images/skills/Next.jpg"
import Img4 from "../../../assets/images/skills/React.jpg"
import Img5 from "../../../assets/images/skills/node.jpg"
import Img6 from "../../../assets/images/skills/hosting.jpg"
import Img7 from "../../../assets/images/skills/mongodb.jpg"
import Img8 from "../../../assets/images/skills/self-learninig.jpg"
import Img9 from "../../../assets/images/skills/time-management.jpg"
import Img10 from "../../../assets/images/skills/tailwind-css.jpg"
import Img11 from "../../../assets/images/skills/TS.jpg"
import Img12 from "../../../assets/images/skills/CSS.jpg"
import Img13 from "../../../assets/images/skills/Express.jpg"
import Img14 from "../../../assets/images/skills/Threejs.jpg"
import Img15 from "../../../assets/images/skills/graphql.jpg"
import Img16 from "../../../assets/images/skills/fastify.jpeg"
import Img17 from "../../../assets/images/skills/mysql.jpeg"
import Img18 from "../../../assets/images/skills/scss.jpeg"
import Img19 from "../../../assets/images/skills/github.jpeg"
import Img20 from "../../../assets/images/skills/expo.jpeg"

const data = [
    {
        title: 'HTML',
        img: Img1,
        subtitle: 'Building dynamic web pages with semantic HTML structure, ensuring accessibility and SEO optimization.',
    },
    {
        title: 'CSS',
        img: Img12,
        subtitle: 'Crafting visually appealing UI components with CSS, utilizing flexbox, grid, and responsive design principles.',
    },
    {
        title: 'SCSS',
        img: Img18,
        subtitle: 'Utilizing Sass/SCSS for advanced CSS styling, enabling variables, nesting, and mixins for cleaner and more maintainable styles.',
    },
    {
        title: 'Tailwind CSS',
        img: Img10,
        subtitle: 'Streamlining CSS development with Tailwind, leveraging its utility-first approach for rapid prototyping.',
    },
    {
        title: 'JS',
        img: Img2,
        subtitle: 'Writing efficient, modular JavaScript code for dynamic web applications, utilizing modern syntax and best practices.',
    },
    {
        title: 'TS',
        img: Img11,
        subtitle: 'Leveraging TypeScript for robust, statically-typed JavaScript development, ensuring code maintainability and scalability.',
    },
    {
        title: 'React',
        img: Img4,
        subtitle: 'Building reusable, component-driven UIs with React, utilizing hooks, context API, and optimized rendering techniques.',
    },
    {
        title: 'React Native by Expo',
        img: Img20,
        subtitle: 'Creating cross-platform mobile applications using React Native by expo, enabling code reuse and faster development cycles.',
    },
    {
        title: 'Next',
        img: Img3,
        subtitle: 'Developing server-side rendered, statically generated web applications with Next.js, utilizing its built-in optimization features.',
    },
    {
        title: 'Node',
        img: Img5,
        subtitle: 'Creating scalable, high-performance server-side applications with Node.js, utilizing its event-driven, non-blocking I/O model.',
    },
    {
        title: 'Express',
        img: Img13,
        subtitle: 'Building fast, flexible, and modular web applications with Express.js, utilizing its middleware architecture and routing capabilities.',
    },
    {
        title: 'Fastify',
        img: Img16,
        subtitle: 'Building high-performance web applications with Fastify, focusing on speed and low overhead.',
    },
    {
        title: 'Mongodb',
        img: Img7,
        subtitle: 'Designing and implementing scalable, NoSQL databases with MongoDB, utilizing its flexible data model and high-performance querying capabilities.',
    },
    {
        title: 'SQL & MYSQL',
        img: Img17,
        subtitle: 'Designing and implementing scalable SQL databases with MySQL, focusing on data integrity and complex queries.',
    },
    {
        title: 'GraphQL',
        img: Img15,
        subtitle: 'Building efficient APIs with GraphQL, enabling clients to request only the data they need and improving performance.',
    },
    {
        title: '3D content by Three.js',
        img: Img14,
        subtitle: 'Creating immersive, interactive 3D experiences with Three.js, utilizing its powerful rendering engine and extensive library of features.',
    },
    {
        title: 'Git & Github',
        img: Img19,
        subtitle: 'Managing code versions and collaboration using Git & Github, employing branching strategies and pull requests for effective teamwork',
    },
    {
        title: 'Hosting',
        img: Img6,
        subtitle: 'Deploying and managing web applications on cloud platforms, ensuring high availability, scalability, and security.',
    },
    {
        title: 'Self learning',
        img: Img8,
        subtitle: 'Continuously updating my skills and knowledge in web development, staying up-to-date with industry trends and best practices.',
    },
    {
        title: 'Time management',
        img: Img9,
        subtitle: 'Effectively managing project timelines, prioritizing tasks, and ensuring timely delivery of high-quality results.',
    },
];

const Skills = () => {
    const [skills, setSkills] = useState(data);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {        
    //     setLoading(true)
    //     axios.get(API.SKILLS.GET)
    //         .then(res => {
    //             if(res?.data?.state === 'success') {
    //                 setSkills(res?.data?.data)                    
    //             }
    //         })
    //         .finally(e => {
    //             setLoading(false)
    //         });
    // }, []);

    return (
        <section id="skills" className="section relative">
            <MainHeaderTitle title={'My Skills'} subtitle={"What I Bring to the Table"} description={<LuBrainCircuit className="mx-auto text-[2rem]"/>}/>
            <div className="absolute left-0 top-0 w-full bg"/>
            <div className="grid skills-grid gap-5 container mx-auto">
                {!loading && skills && skills.map((e, i) => 
                    <ScrollAnimation animateIn="slideInUp" animateOnce={false} delay={i*50} key={i}>
                        <SkillsCard img={e.img} title={e.title} subtitle={e.subtitle}/>
                    </ScrollAnimation>
                )}
            </div>
        </section>
    )
}

export default Skills