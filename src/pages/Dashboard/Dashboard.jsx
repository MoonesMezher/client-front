import DashCard from "../../components/dashboard/DashCard/DashCard"
import MainHeaderTitle from "../../components/shared/MainHeaderTitle/MainHeaderTitle"
import SEO from '../../components/shared/SEO/SEO'
import './Dashboard.css'

const sections = [
    {
        title: 'Statistics',
        url: '/mm-admin/statistics-settings'
    },
    {
        title: 'Messages',
        url: '/mm-admin/messages-settings'
    },
    {
        title: 'About',
        url: '/mm-admin/about-settings'
    },
    {
        title: 'Experience',
        url: '/mm-admin/experience-settings'
    },
    {
        title: 'Projects',
        url: '/mm-admin/projects-settings'
    },
    {
        title: 'Skills',
        url: '/mm-admin/skills-settings'
    },
    {
        title: 'Feedbacks',
        url: '/mm-admin/feedbacks-settings'
    },
    {
        title: 'CV',
        url: '/mm-admin/cv-settings'
    },
]

const Dashboard = () => {
    return (
        <main className="min-h-screen">
            <SEO title={'Dashboard - Moones Mezher'}/>
            <div className="mt-32 container mx-auto pb-32">
                <MainHeaderTitle title={'Dashboard'} subtitle={'Hello Moones'}/>
                <div className="dash-grid grid gap-5 container">
                    {sections.map((e, i) => <DashCard key={i} info={e} />)}
                </div>
            </div>
        </main> 
    )
}

export default Dashboard