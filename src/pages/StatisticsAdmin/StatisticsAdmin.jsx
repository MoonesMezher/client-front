import { Typography } from "@material-tailwind/react"
import MainHeaderTitle from "../../components/shared/MainHeaderTitle/MainHeaderTitle"
import SEO from '../../components/shared/SEO/SEO'

const sections = [
    {
        title: 'Visits',
        total: 300
    },
    {
        title: 'Messages',
        total: 30
    },
    {
        title: 'CV',
        total: 20
    }
]

const StatisticsAdmin = () => {
    return (
        <main className="min-h-screen">
            <div className="mt-32 container mx-auto pb-32">
                <MainHeaderTitle title={'Statistics Admin'} subtitle={'Take a look'}/>
                <div className="dash-grid grid gap-5 container">
                    {sections.map((e, i) => <div key={i} className="p-10 rounded-l-xl border border-blue-gray-100 rounded-xl bg-white relative">
                        <Typography variant="h3" color="blue-gray">
                            { e.title }
                        </Typography>
                        <Typography variant="h3" color="blue" className="mt-5">
                            { e.total }
                        </Typography>
                    </div>)}
                </div>
            </div>
        </main> 
    )
}

export default StatisticsAdmin